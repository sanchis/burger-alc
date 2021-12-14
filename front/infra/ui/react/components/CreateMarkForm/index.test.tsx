import { render, RenderResult, fireEvent, screen, act } from '@testing-library/react'
import { Burger } from 'front/domain/entities/Burger'
import { Mark } from 'front/domain/entities/Mark'
import CreateMarkForm from '.'
import * as lazyCaller from '../../hooks/useLazyCaller'
import * as notification from '../../hooks/useNotification'

describe('CreateMark Form', () => {
  const burger: Burger = {
    name: 'The best burger',
    id: '1',
    description: 'Description',
    image: 'https://via.placeholder.com/150',
    price: 5
  }

  const onCreate = jest.fn()
  const onCancel = jest.fn()

  jest.spyOn(lazyCaller, 'useLazyCaller').mockImplementation(() => ({
    run: runMockedResolve,
    data: undefined,
    error: undefined,
    loading: false
  }))

  /** */
  const markCreated: Mark = {
    id: '',
    mark: 2,
    comment: '',
    createdAt: ''
  }
  const markCreatedResolve = async (): Promise<Mark> => await Promise.resolve(markCreated)
  const markCreatedReject = async (): Promise<any> => await Promise.reject(new Error('Test error'))
  const runMockedResolve = jest.fn(markCreatedResolve)
  const runMockedReject = jest.fn(markCreatedReject)

  const showNotificationError = jest.fn()
  jest.spyOn(notification, 'useNotification').mockImplementation(() => ({
    showNotification: showNotificationError
  }))
  /** */

  const renderComponent = (): RenderResult => render(
    <CreateMarkForm burger={burger} onCancel={onCancel} onCreate={onCreate} />)

  it('renders form', () => {
    expect(renderComponent).toBeDefined()
  })

  it('can increment/decrement max and min', () => {
    const { getByTestId } = renderComponent()
    const decrementBtn = getByTestId('decrement-btn')
    const incrementBtn = getByTestId('increment-btn')
    const mark = getByTestId('mark')

    fireEvent.click(decrementBtn)
    expect(mark.textContent).toBe('0')
    for (let index = 0; index < 12; index++) {
      fireEvent.click(incrementBtn)
    }
    expect(mark.textContent).toBe('10')
    fireEvent.click(decrementBtn)
    expect(mark.textContent).toBe('9')
  })

  it('can create mark', async () => {
    const { getByTestId } = renderComponent()
    const comment = 'A good comment today'
    const submitBtn = getByTestId('submit-btn')
    const incrementBtn = getByTestId('increment-btn')
    const commentInput = screen.getByTestId<HTMLTextAreaElement>('comment-input')

    fireEvent.click(incrementBtn)
    fireEvent.change(commentInput, { target: { value: comment } })

    expect(commentInput.value).toBe(comment)

    await act(async () => {
      fireEvent.click(submitBtn)
      return await markCreatedResolve().then(() => {})
    })

    expect(runMockedResolve).toBeCalledTimes(1)
    expect(onCreate).toBeCalledWith(markCreated)
  })

  it('validate comment', async () => {
    runMockedResolve.mockReset()
    jest.spyOn(lazyCaller, 'useLazyCaller').mockImplementation(() => ({
      run: runMockedResolve,
      data: undefined,
      error: undefined,
      loading: false
    }))
    const { getByTestId } = renderComponent()
    const commentInput = getByTestId('comment-input')
    const submitBtn = getByTestId('submit-btn')

    fireEvent.focus(commentInput)
    expect(commentInput).toHaveAttribute('aria-invalid', 'true')
    fireEvent.click(submitBtn)
    expect(runMockedResolve).toHaveBeenCalledTimes(0)

    fireEvent.change(commentInput, { target: { value: ' ' } })
    fireEvent.click(submitBtn)
    expect(commentInput).toHaveAttribute('aria-invalid', 'true')
    expect(runMockedResolve).toHaveBeenCalledTimes(0)

    fireEvent.change(commentInput, { target: { value: ' test ' } })
    expect(commentInput).not.toHaveAttribute('aria-invalid', 'true')
  })

  it('loading indicator', () => {
    jest.spyOn(lazyCaller, 'useLazyCaller').mockImplementation(() => ({
      run: runMockedReject,
      data: undefined,
      error: undefined,
      loading: true
    }))
    const { getByTestId } = renderComponent()
    expect(getByTestId('loading-indicator')).toBeTruthy()
  })

  it('can fail create mark', async () => {
    jest.spyOn(lazyCaller, 'useLazyCaller').mockImplementation(() => ({
      run: runMockedReject,
      data: undefined,
      error: undefined,
      loading: false
    }))
    const { getByTestId } = renderComponent()
    const submitBtn = getByTestId('submit-btn')
    const commentInput = getByTestId('comment-input')

    fireEvent.change(commentInput, { target: { value: ' hola ' } })

    const consoleMock = jest.spyOn(console, 'error')
    await act(async () => {
      fireEvent.click(submitBtn)
    })

    expect(showNotificationError).toBeCalled()
    await expect(runMockedReject).rejects.toEqual(new Error('Test error'))
    expect(consoleMock).toBeCalled()
  })
})
