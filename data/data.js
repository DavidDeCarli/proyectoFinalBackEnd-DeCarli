const products = [
    {
    id: 1,
    timestamp: '16/10/2022 00:00:00',
    productos: [{
      name: 'Escuadra',
      description: 'Escuadra que sirve para escuadrar escuadras dentro de una zona escuadrada',
      codigo: '2e2ad6d784514dc5b3cdfa181f7471a8',
      price: 323.45,
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Squadra_45.jpg',
      stock: 5
      }]
    },
    {
      id: 2,
      timestamp: '16/10/2022 00:00:00',
      productos: [{
        name: 'Calculadora',
        description: 'Te calcula hasta la probabilidad de que tu crush te hable en las proximas 24 horas',
        codigo: '6a15f6d73e024c4499cf50b8f469f061',
        price: 234.56,
        image: 'https://micalculadoracientifica.com/wp-content/uploads/2021/01/TI-Nspire-CX-Amazon.jpg',
        stock: 5
      }]
    },
    {
      id: 3,
      timestamp: '16/10/2022 00:00:00',
      productos: [{
        name: 'Globo Terráqueo',
        description: 'Modelo convencional del planeta con vista en alto relieve. Revive todas las verguenzas que has pasado en este planeta como nunca antes!',
        codigo: '6f28c39299fd44e5a6d988c2b594cd71',
        price: 45.67,
        image: 'https://panamericana.vteximg.com.br/arquivos/ids/256800-600-690/globo-terraqueo-politico-40-cm-7701016736787.jpg?v=636381897120030000',
        stock: 5
      }]
    },
    {
      id: 4,
      timestamp: '16/10/2022 00:00:00',
      name: 'Paleta Pintura',
      productos: [{
        description: 'Paleta de pintura utilizada por el mismo Picasso, por eso es tan cara!',
        codigo: '3dd2d163fd0348f08f1aeff736ee4290',
        price: 456.78,
        image: 'https://www.redlibrera.com/product_images/z/119/paleta__43840_zoom.jpg',
        stock: 5
      }]
    },
    {
      id: 5,
      timestamp: '16/10/2022 00:00:00',
      productos: [{
        name: 'Reloj',
        description: 'Da la hora y la actualiza, que mas quieres saber?',
        codigo: '5f94157bf36d4fdc982412cd3dfbef59',
        price: 67.89,
        image: 'https://us.123rf.com/450wm/monticello/monticello1911/monticello191100379/135078958-reloj-de-pared-aislado-sobre-fondo-blanco-nueve-.jpg?ver=6',
        stock: 5
      }]
    },
    {
      id: 6,
      timestamp: '16/10/2022 00:00:00',
      productos: [{
        name: 'Agenda',
        description: 'Escribe esas notas de amor pendientes en tu nueva Agenda y olvidate de lo electronico!',
        codigo: '31243ff05f754c1cbc918bde17e36a32',
        price: 78.90,
        image: 'https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/AGYRBXKZQH6C4KYQU6IGD2BDIE.jpg',
        stock: 5
      }]
    },
    {
      id: 7,
      timestamp: '16/10/2022 00:00:00',
      productos: [{
        name: 'Escudo caballero templario',
      description: 'Te protege hasta de las vergüenzas que puedas llegar a pasar',
      codigo: 'c8545b0387d3449ab4c833597a2086c9',
      price: 456.78,
      image: 'https://www.tienda-medieval.com/blog/wp-content/uploads/2010/09/escudo_templario1.jpg',
      stock: 5
      }]
    },
    {
      id: 8,
      timestamp: '16/10/2022 00:00:00',
      productos: [{
        name: 'Escorpión de juguete',
        description: 'No es venenoso y si te pica sólo te duele el bolsillo',
        codigo: 'a386275f98f04a8ab3d786b6d390fff4',
        price: 1000.87,
        image: 'https://sc04.alicdn.com/kf/H5794a667d8844b0592a7a76e8724842bt.jpg',
        stock: 5
      }]
    },
  ];
  
  const users = [
    {
      id: 1,
      name: 'Jorge',
      lastname: 'Malo',
      age: 29,
      email: 'jorge@housemalo.com',
      role: 'support'
    },
    {
      id: 2,
      name: 'Daenerys',
      lastname: 'Targaryen',
      age: 16,
      email: 'dan@housetargaryen.com',
      role: 'lead'
    },
    {
      id: 3,
      name: 'Jon',
      lastname: 'Snow',
      age: 24,
      email: 'jon@housestark.com',
      role: 'lead'
    },
    {
      id: 4,
      name: 'Arya',
      lastname: 'Stark',
      age: 18,
      email: 'arya@housestark.com',
      role: 'assassin'
    },
    {
      id: 5,
      name: 'Robb',
      lastname: 'Stark',
      age: 20,
      email: 'robb@housestark.com',
      role: 'lead'
    },
    {
      id: 6,
      name: 'Tyrion',
      lastname: 'Lannister',
      age: 39,
      email: 'tyirion@houselannister.com',
      role: 'support'
    },
    {
      id: 7,
      name: 'Brandon',
      lastname: 'Stark',
      age: 34,
      email: 'bran@housestark.com',
      role: 'psychic'
    },
    {
      id: 8,
      name: 'Hodor',
      lastname: 'Hodor',
      age: 38,
      email: 'Hodor',
      role: 'support'
    },
    {
      id: 9,
      name: 'Bronn',
      lastname: '',
      age: null,
      email: 'bronn@blackwater',
      role: 'assassin'
    },
    {
      id: 10,
      name: 'Lionel',
      lastname: 'Messi',
      age: 34,
      email: 'lapulga@balondeoro.com',
      role: 'god'
    },
  ];
  
  module.exports = {
    products,
    users,
  };