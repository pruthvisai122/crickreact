import React from "react";
import data from "./data";

// import Profile from "./Profile";

const App = () => {
  return(
  //   <section className="posts-container">
  //     <Profile/>
  //     <Profile/>
  //     <Profile/>
  //     <Profile/>
  //     <Profile/>
  //     <Profile/>
  //     <Profile/>
  //     <Profile/>
  //   </section>
  // )


    <section className="posts-container">
      {data.map((eachObj) => {
        const {id,thumbnailUrl,title,type} = eachObj;
        return (
          <Profile 
            key={id} 
            id={id} 
            thumbnailUrl={thumbnailUrl} 
            title={title} 
            type={type}
    
          />
        );
      })}
    </section>
  )
};

const Profile = (props) => {
  // return (
  //   <article className="profile-card">
  //     <img src="https://via.placeholder.com/150/b0f7cc" alt="something"/>
  //     <h2 className="title">shikar dhawan</h2>
  //     <a href="https://via.placeholder.com/150/b0f7cc">click here</a>
  //   </article>
  // )
// }

  const {title, thumbnailUrl,type}=props;
  return(
      <article className="profile-card">
          <img src={thumbnailUrl} alt="something"/>
          <h2>{title}</h2>
          <p>{type}</p>
      </article>
  );
}



// const App = () => {
//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   );
// }

export default App;
