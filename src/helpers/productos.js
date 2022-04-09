
export const productos = [
    {id:1,categoryId:"Alimento", title: "Pro Plan Perro",price:"3500",image:"https://mla-s1-p.mlstatic.com/802997-MLA32506147034_102019-F.jpg"},
    {id:2,categoryId:"Alimento", title: "Dogui Perro",price:"2700",image:"https://jumboargentina.vtexassets.com/arquivos/ids/553246/Alimento-Para-Perros-Dogui-Carne-Cereales-15-Kg-1-2560.jpg?v=637080019120800000"},
    {id:3,categoryId:"Alimento", title: "Alimento de Perro-3",price:"5800",image:"https://mla-s1-p.mlstatic.com/802997-MLA32506147034_102019-F.jpg"},
    {id:4,categoryId:"Ropa", title: "Alimento de Perro-4",price:"8000",image:"https://mla-s1-p.mlstatic.com/802997-MLA32506147034_102019-F.jpg"},
    {id:5,categoryId:"Alimento", title: "Alimento de Perro-5",price:"4700",image:"https://mla-s1-p.mlstatic.com/802997-MLA32506147034_102019-F.jpg"},
    {id:6,categoryId:"Juguetes", title: "Alimento de Perro-6",price:"3900",image:"https://mla-s1-p.mlstatic.com/802997-MLA32506147034_102019-F.jpg"},
    {id:7,categoryId:"Alimento", title: "Alimento de Perro-7",price:"3000",image:"https://mla-s1-p.mlstatic.com/802997-MLA32506147034_102019-F.jpg"},
    {id:8,categoryId:"Alimento", title: "Alimento de Perro-8",price:"15000",image:"https://mla-s1-p.mlstatic.com/802997-MLA32506147034_102019-F.jpg"}  
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
