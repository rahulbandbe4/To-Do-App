'use client';
import React, { useState } from 'react';

const Todo = () => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const [mainstate, setmainstate] = useState([]);

    const submithandler = (e) => {
        e.preventDefault();
        setmainstate([...mainstate, { title, desc }]);
        settitle("");
        setdesc("");
    }

    const deletehandler = (i) => {
        let copytask = [...mainstate];
        copytask.splice(i, 1);
        setmainstate(copytask);
    }

    let renderTask = <h1 className='text-center'>No Task Available</h1>;
    if(mainstate.length > 0){
        renderTask = mainstate.map((t, i) => {
            return (
                <li key={i} className='flex justify-center gap-24 mt-5'>
                    <input type='text' value={t.title} className='border-solid border-4 border-sky-500 p-1' />
                    <input type='text' value={t.desc} className='border-solid border-4 border-sky-500 p-1' />
                    <button onClick={() => {
                        deletehandler(i);
                    }} className='bg-red-500 text-white px-5 py-1 rounded'>Delete</button>
                </li>
            )
        });
    }

    return (
        <>
            <h1 className='text-center font-bold font-sans text-5xl bg-fuchsia-600 p-5 text-white'>To Do App</h1>
            <form className='flex justify-center m-8 gap-24' onSubmit={submithandler}>
                <input type='text' className='border-solid border-4 border-sky-500 p-1' placeholder='Enter Title' value={title} onChange={(e) => {
                    settitle(e.target.value);
                }} />
                <input type='text' className='border-solid border-4 border-sky-500 p-1' placeholder='Enter Description' value={desc} onChange={(e) => {
                    setdesc(e.target.value);
                }} />
                <input type='submit' value="Add Task" className='bg-black text-white px-3 py-1 rounded' />
            </form>
            <div className='bg-slate-300 p-5'>
                <p className='text-center text-3xl font-semibold'>Tasks</p>
                <ol>
                    {renderTask}
                </ol>
            </div>
        </>
    )
}

export default Todo;