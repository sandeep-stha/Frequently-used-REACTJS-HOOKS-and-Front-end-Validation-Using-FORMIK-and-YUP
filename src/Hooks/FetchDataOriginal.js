import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

// Axios Documentation:- https://jsonplaceholder.typicode.com/

const FetchDataOriginal = () => {
  const [post, setpost] = useState([]);

  const [Displaypost, setDisplayPost] = useState([]);

  const [Limit, setlimit] = useState([0]);
  // const [Limit, setlimit] = useState([20])  WE CAN DO THIS BUT INITIALLY FOR SOME REASON, IT WILL NOT SHOW 20 ITEMS

  //Here useState is used so as to put value in setpost when the state changes

  useEffect(() => {
    //useEffect Syntax in Data.js

    //Here, useEffect is woeeking everytime the state changes via useState

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      // .then(res => console.log(res))   /* From Axios Documentation, RES = RESULT. THIS IS GENERATED BY THE FAKE API IN THE AXIOS */

      // .then(res => console.log(res.data))    /* This will only fetch the datas i.e JSON DATAS only. Not all Object, Configuration files, etc. In SHORT IT WILL FILTER OUTPUT IN CONSOLE */
      //  The above transferred the result in console. Now to show in post that we defined Above Here:-  const [post, setpost] = useState([])

      .then(
        (res) => setpost(res.data) //Here, setpost is just manipulation post. Just as how setData was used to make +1 or -1 value in data in Data.js in useState
      )

      .catch((err) =>
        console.log(err)
      ); /* From Axios Documentation. THIS IS GENERATED BY THE FAKE API IN THE AXIOS*/

    //Now using slice (which creates new array and slices it in desired number and putting that new array in Post by setPost)

    // setDisplayPost(post.slice(0, Limit))
  }, [Limit]);

  return (
    <>
      <h1>
        These Are All The Outputs from res.data i.e only data of res from fake
        API Generated From https://jsonplaceholder.typicode.com/posts`
      </h1>
      <br></br>
      <br></br>
      {/* {post.map(item=><li key={item.id}>{item.title}</li>)} */}
      {/* The Following code will be changed */}
      {/* {post.map(terms => <li key={terms.id}>{terms.title}</li>)} */}

      {/* The new changed code is as follows and is done so to use display post and useEffect */}
      {post.slice(0, Limit).map((terms) => (
        <li key={terms.id}>{terms.title}</li>
      ))}
      {/* item or Term is just our User Defined Parameter */}
      {/* Here, the entire above line is a variable method. Hence Curly Braces is needed. */}
      {/* Also, item.title is a variable and so is item.id. Hence it is kept in curly Brackets. */}

      {Limit < post.length && (
        <button
          onClick={() => {
            setlimit(Limit + 20);
          }}
        >
          {" "}
          Show More{" "}
        </button>
      )}
      {/* This will add condition where the button SHOW MORE will only be displayed when the lenth of post is greater that limit */}

      {
        Limit > 0 && (
          <button
            onClick={() => {
              setlimit(Limit - 20);
            }}
          >
            {" "}
            Show Less{" "}
          </button>
        )
        /* This will add condition where the button SHOW MORE will only be displayed when the lenth of post is greater that limit */
      }
    </>
  );
};

// How This IS WORKING:-

// setPost is manipulating Post. The set post fetches the res. specifically only data from result as in res.data

//setDisplayPost is manipulating Displaypost.

// res and err are from Fake API in https://jsonplaceholder.typicode.com/ SPECIFICALLY https://jsonplaceholder.typicode.com/posts. HENCE NOT NEEDED TO DEFINE THEM HERE AS ALREADY DEFINED INSIDE FAKE API

// The setPost then puts the output of res.data into post

//post is initially getting all the data, this will then be USED TO SHOW THE ARRAY LENGTH. INITIALLY THE LENGTH IS 100 AS WE HAVE SEEN IN https://jsonplaceholder.typicode.com/posts

//DisplayPost is used to map and display items

// we define post OR DISPLAYPOST in the return part in rafce rfce. to display what is in the output

export default FetchDataOriginal;

//ALTERNATIVELY, WE CAN DO THE ABOVE MENTIONED USING ONLY DISPLAY POST AS FOLLOWS:-

// import React, { useEffect } from 'react'
// import axios from 'axios'
// import { useState } from 'react'

// Axios Documentation:- https://jsonplaceholder.typicode.com/

// const FetchDataOriginal = () => {

//     const [Displaypost, setDisplayPost] = useState([])

//     const [Limit, setLimit] = useState([20]) /*THIS WILL INITIALLY SHOW 20 ITEMS*/

//     //Here useState is used so as to put value in Displaypost when the state changes

//     useEffect(() => {

//Each Time Limit CHANGES, useEffect is called.

//         axios.get('https://jsonplaceholder.typicode.com/posts')

//             .then(res =>
//                 setDisplayPost(res.data)
//             )

//             .catch(err => console.log(err))

//         // setDisplayPost(post.slice(0, Limit))

//     }, [Limit])

//Each Time Limit CHANGES, useEffect is called.

//     return (
//         <>

//             <h1>These Are All The Outputs from res.data i.e only data of res from fake API Generated From https://jsonplaceholder.typicode.com/posts`</h1>
//             <br></br>
//             <br></br>

//             {Displaypost.slice(0, Limit).map(terms => <li key={terms.id}>{terms.title}</li>)}

//             {(Limit < 100) && <button onClick={() => { setLimit(Limit + 20) }}> Show More </button>}

//             {/* Here we give 100 directly as we already know that the lenth of post is 100 which is via  https://jsonplaceholder.typicode.com/posts */}

//             {(Limit > 0) && <button onClick={() => { setLimit(Limit - 20) }}> Show Less </button>}

//         </>
//     )
// }

// export default FetchDataOriginal
