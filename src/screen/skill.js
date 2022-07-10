import './skill.css';

import Card from '../components/Card';

import cpp from '../assets/cpp.svg'
import javascript from '../assets/javascript.svg'
import python from '../assets/python.svg'
import html from '../assets/html.svg'
import react from '../assets/react.svg'
import mysql from '../assets/mysql.svg'
import css from '../assets/css.svg'
import java from '../assets/java.svg'
import php from '../assets/php.svg'

export default function Skill()
{
    
    return(
        <div id ="skill">
        <div className="skill">
            <div className="title">
                <h1>Skills</h1>
                <p>FullStack Development &bull; Software Engineering &bull; Machine Learning</p>
            </div>
            <div className="skillcontainer">
                <div className="skillgroup g1">
                    <Card src={html} name="HTML"/>
                </div>
                <div className="skillgroup g2">
                    <Card src={css} name="CSS"/>
                    <Card src={cpp} name="C++"/>
                </div>
                <div className="skillgroup g3">
                    <Card src={php} name="PHP"/>
                    <Card src={javascript} name="Javascript"/>
                    <Card src={react} name="React js"/>
                </div>
                <div className="skillgroup g4">

                    <Card src={python} name="Python"/>
                    <Card src={java} name="java"/>
                </div>
                <div className="skillgroup g5">
                    <Card src={mysql} name="mySQL"/>
                </div>
            </div>
        </div>:

        </div>
    )
}