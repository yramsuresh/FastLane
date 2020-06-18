import React, { useState, useEffect } from "react";

const portfolio = [
  {
    name: "Product 1",
    image : "https://image.shutterstock.com/z/stock-photo-handsome-businessman-working-in-office-1684560559.jpg",
    category: ["all", "desktop"]
  },
  {
    name: "Product 2",
    image : "https://image.shutterstock.com/z/stock-photo-young-man-working-on-his-laptop-with-blank-copy-space-screen-for-your-advertising-text-message-in-741417301.jpg",
    category: ["all", "desktop"]
  },
  {
    name: "Product 3",
    image : "https://image.shutterstock.com/image-photo/close-womens-hands-holding-cell-600w-379989589.jpg",
    category: ["all", "mobile"] ,
   
  },
 {
    name: "Product 4",
    image : "https://image.shutterstock.com/image-photo/girl-pointing-finger-on-screen-600w-780955027.jpg",
    category: ["all", "mobile"] ,
   
  }
];

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map(p => ({...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <div className="container-fluid portfoliowrapper">
      <h1>Portfolio Filter Example</h1>
      <ul className="portfolio__labels">
        <li><a href="/#" active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </a>
        </li>
        <li><a href="/#" active={filter === "desktop"}
          onClick={() => setFilter("desktop")}>
          desktop
        </a>
        </li>
       <li> <a href="/#" active={filter === "mobile"}
          onClick={() => setFilter("mobile")}>
          Mobile
        </a>
        </li>
       
      </ul>
      <div className="row portfoliorow">
            {projects.map(item =>
          item.filtered === true ? 
         <div  className="col-sm-3">
         <div className="portfolioitem" key={item.name}>
               <img src={item.image} alt=""/>
                <p>{item.name}</p>
         </div></div> : ""
        )}
        </div>
      </div>
  </>
  );
}


export default Portfolio;