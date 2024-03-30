
import "./Tag.css"

const Tag = ({name,selectTag,selected}) => {
  const tagStyle = {
    "HTML&CSS":{backgroundColor:"#D7C0AE"},
    "Python&DSA":{backgroundColor:"#AEBDCA"},
    Javascript:{backgroundColor:"#DBA39A"},
    React:{backgroundColor:"#BF9270"},
    Database:{backgroundColor:"#BAC7A7"},
    Docker:{backgroundColor:"#ABC4AA"},
    kubernetes:{backgroundColor:"#A6BB8D"},
    AWS:{backgroundColor:"#9AD0C2"},
    Nodejs:{backgroundColor:"#AD9D9D"},
    Default:{backgroundColor:"#f9f9f9"}
  }
  return (
    <button type="button" style={selected?tagStyle[name]:tagStyle["Default"]} onClick={()=>{selectTag(name)}} className="tag">{name}</button>
  )
}

export default Tag