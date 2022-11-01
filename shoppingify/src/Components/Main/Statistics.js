import React from 'react'
import chart from './images/fc3noor2.png'

const Statistics = () => {
    return (
        <div className='statistics'>
            <div className='top'>
                <div className='topItems'>
                    <h1>Top items</h1>
                    <div className='content'>
                        <div className='coll'>
                            <div className='name'>
                                <h1>Banana</h1>
                                <span>37%</span>
                            </div>
                            <div className='backLine'>
                                <span className='line'></span>
                            </div>
                        </div>
                        <div className='coll'>
                            <div className='name'>
                                <h1>Rice</h1>
                                <span>30%</span>
                            </div>
                            <div className='backLine'>
                                <span className='line l1'></span>
                            </div>
                        </div>
                        <div className='coll'>
                            <div className='name'>
                                <h1>Chicken 1kg</h1>
                                <span>25%</span>
                            </div>
                            <div className='backLine'>
                                <span className='line l2'></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='topCategories topItems'>
                    <h1>Top Categories</h1>
                    <div className='content'>
                        <div className='coll'>
                            <div className='name'>
                                <h1>Fruit and vegetables</h1>
                                <span>88%</span>
                            </div>
                            <div className='backLine'>
                                <span className='lineC'></span>
                            </div>
                        </div>
                        <div className='coll'>
                            <div className='name'>
                                <h1>Meat and Fish</h1>
                                <span>57%</span>
                            </div>
                            <div className='backLine'>
                                <span className='lineC c1'></span>
                            </div>
                        </div>
                        <div className='coll'>
                            <div className='name'>
                                <h1>Pets</h1>
                                <span>27%</span>
                            </div>
                            <div className='backLine'>
                                <span className='lineC c2'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='monthlySummary'>
                <h1>Monthly Summary</h1>
                <img src={chart}/>
            </div>
        </div>
    )
}

export default Statistics