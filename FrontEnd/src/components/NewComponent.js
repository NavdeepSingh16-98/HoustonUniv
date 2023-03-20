import React,{ useEffect, useState, Fragment } from 'react';

import Header from './Header';

import { useForm } from 'react-hook-form';


import useUniversity from '../hooks/useUniversity';
import useCategories from '../hooks/useCategories';

function NewComponent(){
    const { 
        register, 
        handleSubmit, 
        errors,
        setError,
    } = useForm({ mode: "onBlur" });

    const [loadUniversity] = useUniversity();
    const [loadCategories] = useCategories();
    const [university, setUniversity] = useState({});
    const [categories, setCategories] = useState([]);
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [choosenCategory, setChoosenCategory] = useState([]);

    useEffect(() => {
        fetchUniversity();
        fetchCategories();
    }, []);

    const handleFormSubmit = (data) => {
        alert("form submitted");
        console.log('handleFormSubmit called'+ + JSON.stringify(data));
    };

    const fetchUniversity = () => {
        loadUniversity()
            .then((res) => {
                setUniversity(res)
            })
            .catch((err) => {
                console.log(err);
        });
    }

    const fetchCategories = () => {
        loadCategories()
            .then((res) => {
                setCategories(res.categories)
                setChoosenCategory(res.categories[categoryIndex]);
                console.log('categories=', JSON.stringify(categories))
            })
            .catch((err) => {
                console.log(err);
        });
    }

    const selectCategory = (index) => {
        setCategoryIndex(index);
        setChoosenCategory(categories[index]);
    }


    return(
<>
<Header />
<section className="featured">
        <div className="container">
            <div className="txt_block">
                <h2>{university?.sub_title}</h2>
                <p>{ university?.sub_body}</p>
            </div>
           
                <div className="tab">
                    <div className="row one">
                        { categories?.map((category, index) => {
                            return <button key={index} className={(index == categoryIndex) ? "tablinks active" : "tablinks"} onClick={() => selectCategory(index)}>{category.title}</button>
                        })}
                       </div>
                </div>
                  
                  <div id="tab1" className="tabcontent" style={{ display: 'block' }} >
                    <div className="tab_head">
                        <h2>{ choosenCategory?.sub_heading }</h2>
                    </div>
                    <div className="row">
                        { choosenCategory?.section?.map((sec, index) => {
                              return (<div key={index} className="col">
                              <div className="tab_view">
                                  <div className="triangle"></div>
                                  <h3>{ sec.name }</h3>
                                  <p>{ sec.desc }</p>
                              </div>
                          </div>)  
                        })}
                        
                    </div>
                  </div>
            </div>
    </section>
</>

    )
}

export default NewComponent