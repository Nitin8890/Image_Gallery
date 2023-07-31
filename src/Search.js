import React, { useState }  from "react";

function Search({searchText}) {
    const [text,settext] = useState('');

    const submit=(e)=>{
        e.preventDefault();

        searchText(text)
    }
  return (
    <div className="max-w-sm overflow-hidden rounded my-10 mx-auto">
      <form onSubmit={submit} className="w-full max-w-sm">
        <div className="flex items-center justify-between border-b border-b-2 border-teal-500 py-2">
          <input
          onChange={e=>{settext(e.target.value)}}
            className="h-full w-full appearance-none bg-transparent focus:outline-none"
            type="text"
            placeholder="Search...."
          ></input>
          <button
            className="bg-teal-500 hover:bg-teal-200 rounded-lg text-sm border-4 py-1 px-2"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
