
export const productos = [
    {id:1, title: "Remera Deportiva",price:"3500",pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/018/676/products/deportiva-all-blacks1-3fac20ffceb2064e7716341512038642-640-0.png"},
    {id:2, title: "Musculosa",price:"2700",pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_991118-MLA47618508633_092021-O.jpg"},
    {id:3, title: "Buzo",price:"5800",pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_823909-MLA47160130418_082021-W.jpg"},
    {id:4, title: "Campera",price:"8000",pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqOlkJcmHBpw6ApEb70WeNuTER1UlCrY6MHQ&usqp=CAU"},
    {id:5, title: "Short",price:"4700",pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_850865-MLA47964305006_102021-W.jpg"},
    {id:6, title: "Pantalon",price:"3900",pictureUrl:"https://ferreira.vteximg.com.br/arquivos/ids/386920-500-500/ad_GH7305.jpg?v=637745824675230000"},
    {id:7, title: "Pelota",price:"3000",pictureUrl:"https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/cub7a53yf6c9uo5undbjt2si6t00/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5"},
    {id:8, title: "Zapatillas",price:"15000",pictureUrl:"https://moda-hombre.com/wp-content/uploads/2020/04/Las-Mejores-Marcas-de-Zapatillas-Deportivas-que-Debes-Conocer-scaled.jpg"}  
  ];
  

export const task = new Promise((resolve, reject)=>{
    let aux = true;
    if (aux) {
      setTimeout(()=>{
        resolve(productos);
      }, 2000);
    }else{
      reject('400 - not found');
    }
  })