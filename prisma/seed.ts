import { Prisma } from '.prisma/client'
import PrismaDb from '../server/core/repositories/Prisma'

const shops: Prisma.Enumerable<Prisma.ShopCreateInput> = [
  {
    name: 'Tribeca',
    address: 'C. San Fernando, 18, 03002 Alicante',
    image: 'https://scontent.falc2-1.fna.fbcdn.net/v/t1.6435-9/106792004_10157089181447274_5243216013774561758_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=973b4a&_nc_ohc=iYgsojqK_F8AX-TojLy&_nc_ht=scontent.falc2-1.fna&oh=06c3e2a4c21c5a88e99f7dae33033fbc&oe=61CFDD63',
    description: '3BK es el Tribeca de siempre, ya que conserva intacta su tradición de salchichería alemana y hamburguesa gourmet, pero ahora también ofrece las mejores ensaladas y productos saludables. El lugar perfecto para relajarse y disfrutar de una comida sana en buena compañía.'
  },
  {
    name: 'Tepuy',
    address: 'Cl. Bazán, 47, 03001 Alicante',
    image: 'https://tepuyburger.es/img/logo.png',
    description: 'Tepuy Burger es un restaurante de hamburguesas y arepas en Alicante, España. Optamos por una comida de calidad y casera, cuidando cada detalle para que cada visita sea una experiencia diferente'
  },
  {
    name: 'Cibum',
    address: 'C. Susana Llaneras, 54, 03001 Alicante',
    description: 'Lámparas tipo cesta y plantas en moderno restaurante especializado en bocadillos y hamburguesas gourmet.',
    image: 'https://scontent.falc2-2.fna.fbcdn.net/v/t1.6435-9/47485051_1673652666072686_793285703726268416_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=973b4a&_nc_ohc=S7AB8O_fF0sAX9LK2cl&_nc_ht=scontent.falc2-2.fna&oh=10fdb6cebf6159ec53252f1a9986fab9&oe=61CE36A2'
  },
  {
    name: 'The Black Turtle',
    address: 'Carrer Castaños, 45, 03001 Alacant, Alicante',
    image: 'https://theblackturtle.es/wp-content/uploads/2019/03/SOLO-TORTUGA-BLANCO_Mesa-de-trabajo-1.png',
    description: 'Nuestros restaurantes tienen su propia personalidad y ambiente. La experiencia The Black Turtle no solo se centra en la carta. Visitar alguno de nuestros locales es transportarse al Soho de una gran ciudad, con acogedora decoración de madera, metal, ladrillo visto, murales estilo streetart al más puro estilo rústico-industrial con música indie-rock de fondo.'
  },
  {
    name: 'Big Twins',
    address: 'C. San Agatangelo, 15, 03007 Alicante',
    image: 'https://pbs.twimg.com/profile_images/1276748298590793730/7bQv5cPb_400x400.jpg',
    description: 'Smash Burger en Alicante. Técnica de cocción que hace que se mantenga todo el sabor y los jugos en la carne.'
  },
  {
    name: 'Rodeo Diner & Burger',
    address: 'Pl. del Rollo, 1, 03400 Villena, Alicante',
    description: 'Rodeo Diner & Burger es un concepto de restaurante americano sito en Villena.Ubicado en su Plaza Mayor.Hacemos nuestros productos a la brasa. Te esperamos¡',
    image: 'https://rodeodiner.com/wp-content/uploads/2020/05/logo-white.png'
  }
]

const connection = new PrismaDb()

for (const shop of shops) {
  connection.db.shop.create({
    data: shop
  }).catch(error => console.error(error))
}
