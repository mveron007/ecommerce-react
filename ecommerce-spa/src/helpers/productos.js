
export const productos = [
    {id:1,category:"Alimento", title: "Pro Plan Perro",price:"3500",pictureUrl:"https://mla-s1-p.mlstatic.com/802997-MLA32506147034_102019-F.jpg"},
    {id:2,category:"Alimento", title: "Dogui Perro",price:"2700",pictureUrl:"https://jumboargentina.vtexassets.com/arquivos/ids/553246/Alimento-Para-Perros-Dogui-Carne-Cereales-15-Kg-1-2560.jpg?v=637080019120800000"},
    {id:3,category:"Alimento", title: "Alimento de Perro-3",price:"5800",pictureUrl:"https://mla-s1-p.mlstatic.com/802997-MLA32506147034_102019-F.jpg"},
    {id:4,category:"Ropa", title: "Alimento de Perro-4",price:"8000",pictureUrl:"https://mla-s1-p.mlstatic.com/802997-MLA32506147034_102019-F.jpg"},
    {id:5,category:"Alimento", title: "Alimento de Perro-5",price:"4700",pictureUrl:"https://mla-s1-p.mlstatic.com/802997-MLA32506147034_102019-F.jpg"},
    {id:6,category:"Juguetes", title: "Alimento de Perro-6",price:"3900",pictureUrl:"https://mla-s1-p.mlstatic.com/802997-MLA32506147034_102019-F.jpg"},
    {id:7,category:"Alimento", title: "Alimento de Perro-7",price:"3000",pictureUrl:"https://mla-s1-p.mlstatic.com/802997-MLA32506147034_102019-F.jpg"},
    {id:8,category:"Alimento", title: "Alimento de Perro-8",price:"15000",pictureUrl:"https://mla-s1-p.mlstatic.com/802997-MLA32506147034_102019-F.jpg"}  
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
