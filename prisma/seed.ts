import { Prisma } from '.prisma/client'
import PrismaDb from './../server/infra/adapters/Prisma'

const shops: Prisma.Enumerable<Prisma.ShopCreateInput> = [
  {
    name: 'Tribeca',
    address: 'C. San Fernando, 18, 03002 Alicante',
    image: 'https://scontent.falc2-1.fna.fbcdn.net/v/t1.6435-9/106792004_10157089181447274_5243216013774561758_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=973b4a&_nc_ohc=iYgsojqK_F8AX-TojLy&_nc_ht=scontent.falc2-1.fna&oh=06c3e2a4c21c5a88e99f7dae33033fbc&oe=61CFDD63',
    description: '3BK es el Tribeca de siempre, ya que conserva intacta su tradición de salchichería alemana y hamburguesa gourmet, pero ahora también ofrece las mejores ensaladas y productos saludables. El lugar perfecto para relajarse y disfrutar de una comida sana en buena compañía.',
    gMapsHash: '!1m18!1m12!1m3!1d3129.211066660335!2d-0.48454898450524675!3d38.344096579659876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237b1723c5bdf%3A0x2bd6773b0d8415ba!2sTribeca!5e0!3m2!1ses!2ses!4v1638536078719!5m2!1ses!2ses',
    burgers: {
      create: [
        {
          name: 'De la casa',
          description: 'De vaca. Con queso cheddar, lechuga, tomate, cebolla cruda y mayonesa. En pan de hamburguesa ligero',
          image: 'https://foodyt.com/media/uploads/Hamburguesa_de_la_casa.jpg'
        },
        {
          name: 'Americana',
          description: 'De vaca. Con huevo frito, bacon, queso cheddar, lechuga, tomate, cebolla asada, pepinillo y mayonesa. En pan de hamburguesa ligero',
          image: 'https://foodyt.com/media/uploads/Hamburguesa_Americana.jpg'
        },
        {
          name: 'Mexicana',
          description: 'De vaca. Con guacamole, queso Monterrey, maíz, lechuga, tomates cherry asados, jalapeños y alioli de rocoto. En pan de hamburguesa ligero ',
          image: 'https://foodyt.com/media/uploads/Hamburguesa_Mexica.jpg'
        },
        {
          name: 'Italiana',
          description: 'De vaca. Con burrata, tomates cherry asados, cebolla asada, rúcula y queso parmesano. En pan de cristal ',
          image: 'https://foodyt.com/media/uploads/Hamburguesa_Italiana.jpg'
        },
        {
          name: 'Royal',
          description: 'De vaca. Con foie, trufa negra, queso brie y cebolla al moscatel. En pan brioche',
          image: 'https://foodyt.com/media/uploads/Hamburguesa_Royal.jpg'
        },
        {
          name: 'Japonesa',
          description: 'Atún rojo, alga wakame, cebolla a la plancha , mayonesa de kimchi y espuma de wasabi. En pan de hamburguesa ligero',
          image: 'https://foodyt.com/media/uploads/japonesa.jpg'
        },
        {
          name: 'Contramuslo de pollo en marinada 3BK',
          description: 'Con pico de gallo, espinacas, maíz, tomates cherry asados y mayonesa de ají amarillo. En pan de cristal',
          image: 'https://foodyt.com/media/uploads/Hamburguesa_de_Pollo.jpg'
        },
        {
          name: 'Cerdo ibérico ecológico',
          description: 'Con pimiento rojo, berenjena, cebolla, bacon y queso manchego. En pan de hamburguesa ligero',
          image: 'https://foodyt.com/media/uploads/Cerdo_Iberico_Ecologico.jpg'
        },
        {
          name: 'Cordero asado',
          description: 'Con lechuga, tomate, pepino y salsa Tzatziki. En pan de cristal',
          image: 'https://foodyt.com/media/uploads/HAMBURGUESA_DE_CORDERO.jpeg'
        },
        {
          name: 'Vegano',
          description: 'Con pastel de lentejas amarillas, calabaza, pimientos, zanahoria y jengibre; con tomate, cebolla, espinacas y berenjena. En pan proteico.',
          image: 'https://foodyt.com/media/uploads/vegano.jpg'
        }
      ]
    }
  },
  {
    name: 'Tepuy',
    address: 'Cl. Bazán, 47, 03001 Alicante',
    image: 'https://tepuyburger.es/img/logo.png',
    description: 'Tepuy Burger es un restaurante de hamburguesas y arepas en Alicante, España. Optamos por una comida de calidad y casera, cuidando cada detalle para que cada visita sea una experiencia diferente',
    gMapsHash: '!1m18!1m12!1m3!1d25025.10359091205!2d-0.47949550141374203!3d38.368930093832574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd623708bc5eca99%3A0x272d0a5db8b66c84!2sTepuy%20Burger!5e0!3m2!1ses!2ses!4v1638535310247!5m2!1ses!2ses'
  },
  {
    name: 'Cibum',
    address: 'C. Susana Llaneras, 54, 03001 Alicante',
    description: 'Lámparas tipo cesta y plantas en moderno restaurante especializado en bocadillos y hamburguesas gourmet.',
    image: 'https://scontent.falc2-2.fna.fbcdn.net/v/t1.6435-9/47485051_1673652666072686_793285703726268416_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=973b4a&_nc_ohc=S7AB8O_fF0sAX9LK2cl&_nc_ht=scontent.falc2-2.fna&oh=10fdb6cebf6159ec53252f1a9986fab9&oe=61CE36A2',
    gMapsHash: '!1m18!1m12!1m3!1d3129.099497808209!2d-0.48917208450520394!3d38.34667907965931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6239a7254ce8a9%3A0x5b87e87099da48d2!2z8J-NlENpYnVt8J-NlCBIYW1idXJndWVzZXLDrWEgZW4gQWxpY2FudGU!5e0!3m2!1ses!2ses!4v1638536118521!5m2!1ses!2ses'
  },
  {
    name: 'The Black Turtle',
    address: 'Carrer Castaños, 45, 03001 Alacant, Alicante',
    image: 'https://theblackturtle.es/wp-content/uploads/2019/03/SOLO-TORTUGA-BLANCO_Mesa-de-trabajo-1.png',
    description: 'Nuestros restaurantes tienen su propia personalidad y ambiente. La experiencia The Black Turtle no solo se centra en la carta. Visitar alguno de nuestros locales es transportarse al Soho de una gran ciudad, con acogedora decoración de madera, metal, ladrillo visto, murales estilo streetart al más puro estilo rústico-industrial con música indie-rock de fondo.',
    gMapsHash: '!1m18!1m12!1m3!1d3129.079568112303!2d-0.4884654845051479!3d38.34714037965934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62376bdf1de6b9%3A0x7c9ac1212a5d330e!2sThe%20Black%20Turtle%20-%20Alicante!5e0!3m2!1ses!2ses!4v1638536152412!5m2!1ses!2ses'
  },
  {
    name: 'Big Twins',
    address: 'C. San Agatangelo, 15, 03007 Alicante',
    image: 'https://pbs.twimg.com/profile_images/1276748298590793730/7bQv5cPb_400x400.jpg',
    description: 'Smash Burger en Alicante. Técnica de cocción que hace que se mantenga todo el sabor y los jugos en la carne.',
    gMapsHash: '!1m18!1m12!1m3!1d3129.30384649369!2d-0.5018106845053161!3d38.34194887966013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237f2e3c82437%3A0x89a4544e27ffc664!2sBIG%20TWINS%20%F0%9F%8D%94%20Burger%20Alicante!5e0!3m2!1ses!2ses!4v1638536181170!5m2!1ses!2ses'
  },
  {
    name: 'Rodeo Diner & Burger',
    address: 'Pl. del Rollo, 1, 03400 Villena, Alicante',
    description: 'Rodeo Diner & Burger es un concepto de restaurante americano sito en Villena.Ubicado en su Plaza Mayor.Hacemos nuestros productos a la brasa. Te esperamos¡',
    image: 'https://rodeodiner.com/wp-content/uploads/2020/05/logo-white.png',
    gMapsHash: '!1m18!1m12!1m3!1d3116.8112576278586!2d-0.8647659844974914!3d38.63022287961274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63df7360a25acb%3A0xfe54bf42d40d61ff!2sRodeo%20Diner%20%26%20Burger!5e0!3m2!1ses!2ses!4v1638536209470!5m2!1ses!2ses'
  }
]

const connection = new PrismaDb()

for (const shop of shops) {
  connection.db.shop.create({
    data: shop
  }).catch((error: any) => console.error(error))
}
