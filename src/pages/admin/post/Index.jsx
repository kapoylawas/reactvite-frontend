//import react
import React, { useEffect, useState } from "react";

//import layout admin
import LayoutAdmin from "../../../layouts/Admin";

//import js cookie
import Cookies from "js-cookie";

//import BASE URL API
import Api from "../../../api";
import { Link } from "react-router-dom";

function PostIndex() {
  //title page
  document.title = "Postings - Administrator";

  //token
  const token = Cookies.get("token");

  const [posts, setPost] = useState([]);

  //state search
  const [search, setSearch] = useState("");

  const fetchData = async (searchData) => {
    //define variable "searchQuery"
    const searchQuery = searchData ? searchData : search;

    //fetch on Rest API
    await Api.get(`api/v1/posting?keyword=${searchQuery}`, {
      headers: {
        //header Bearer + Token
        token: `${token}`,
      },
    }).then((response) => {
      //set state "user"
      console.log(response);
      setPost(response.data.data);
    });
  };

  //hook useEffect
  useEffect(() => {
    //call function "fetchData"
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchHandlder = (e) => {
    e.preventDefault();

    //call function "fetchDataPost" with state search and page number
    fetchData(search);
  };

  return (
    <React.Fragment>
      <LayoutAdmin>
        <div className="row mt-4">
          <form onSubmit={searchHandlder} className="form-group">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search by caption"
              />
              <button type="submit" className="btn btn-md btn-success">
                <i className="fa fa-search"></i> SEARCH
              </button>
            </div>
          </form>
          {posts.map((post) => (
            <div className="col-6 col-md-3 mb-4" key={post.id}>
              <div className="card h-100 border-0 rounded shadow-sm">
                <div className="card-body text-center">
                  <img src={post.image} style={{ width: "80px" }} alt="" />
                </div>
                <hr />
                <div className="text-left">
                  <h7>Name : {post.User.name}</h7>
                </div>
                <div className="text-left">
                  <p>Caption : {post.caption}</p>
                </div>
                <div className="text-left">
                  <Link>{post.tags}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutAdmin>
    </React.Fragment>
  );
}

export default PostIndex;
