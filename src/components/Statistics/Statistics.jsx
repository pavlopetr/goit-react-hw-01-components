import React from "react";
import PropTypes from 'prop-types';
import s from './Statistics.module.css';


const Statistics = ({title, stats}) =>{
    return(
<section className={s.statistics}>
    {title ? <h2 className={s.title}>{title}</h2> : null }

    <ul className={s.statList}>
        {stats.map(el =>(
            <li className={s.item} key={el.id}>
            <span className={s.label}>{el.label}</span>
            <span className={s.percentage}>{el.percentage}</span>
          </li>
        ))}

    </ul>
</section>
    )
}

export default Statistics
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  };