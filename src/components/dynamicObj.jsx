import React, { useState, Fragment } from "react";

const DynamicObj = () => {
    const [formObj, setFormObj] = useState({});

    const onInput = (e) => {
        let {name, value} = e.target
        // console.log(name, value)
        let formData = { [name]: value}
        setFormObj({...formObj, ...formData})
    }

    const innerHTML = `<h1 style="color: red">Hello World!</h1>`

    console.log(formObj);

    const submit = (e) => {
        e.preventdefault();

    }

    return (
        <Fragment>
            <div dangerouslySetInnerHTML={{ __html: innerHTML}}></div>
            <form onSubmit={submit}>
                <input type="text" placeholder="name" name="name" onChange={onInput}/>
                <input type="number" placeholder="age" name="age" onChange={onInput}/>
                <button type="submit">submit</button>
            </form>
        </Fragment>
    )
}

export default DynamicObj;