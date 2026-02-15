function Student(props){
    return(
        <div className="student">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>isStudent:{props.isStudent?"Yes":"No"}</p>
        </div>
    );
}
Student.defaultProps = {
    name : "Person",
    age : 0,
    isStudent :false,
}
export default Student