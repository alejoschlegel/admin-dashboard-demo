import './Home.css';
import "../../style.css";

export default function Home() {

    const handleThemeToggler = (e) => {
        document.body.classList.toggle("dark-theme-variables");
        e.target.parentElement.querySelector("span:nth-child(1)").classList.toggle("active");
        e.target.parentElement.querySelector("span:nth-child(2)").classList.toggle("active");
    }

    const handleMenuBtn = (e) => {
        let sideMenu = document.querySelector("aside");
        sideMenu.style.display= "block";
    }
    const handleCloseBtn = (e) => {
        let sideMenu = document.querySelector("aside");
        sideMenu.style.display= "none";
    }
    

    return (
        <div className="container">
            <aside >
                <div className="top">
                    <div className="logo">
                        <img src="/logo192.png"/>
                        <h2>ADM<span className='danger'>IN</span></h2>
                    </div>
                    <div className="close" id="close-btn" onClick={(e) => {handleCloseBtn(e)}}>
                        <span className="material-icons-sharp">close</span>
                    </div>
                </div>

                <div className="sidebar">
                    <a href="#">
                    <span className="material-icons-sharp">dashboard</span>
                    <h3>dashboard</h3>
                    </a>
                    <a href="#">
                    <span className="material-icons-sharp">person_outline</span>
                    <h3>customers</h3>
                    </a>
                    <a href="#">
                    <span className="material-icons-sharp">receipt_long</span>
                    <h3>orders</h3>
                    </a>
                    <a href="#">
                    <span className="material-icons-sharp">insights</span>
                    <h3>analytics</h3>
                    </a>
                    <a href="#">
                    <span className="material-icons-sharp">mail_outline</span>
                    <h3>messages</h3>
                    <span className="message-count">26</span>
                    </a>
                    <a href="#">
                    <span className="material-icons-sharp">inventory</span>
                    <h3>products</h3>
                    </a>
                    <a href="#">
                    <span className="material-icons-sharp">report_gmailerrorred</span>
                    <h3>reports</h3>
                    </a>
                    <a href="#">
                    <span className="material-icons-sharp">settings</span>
                    <h3>settings</h3>
                    </a>
                    <a href="#">
                    <span className="material-icons-sharp">add</span>
                    <h3>add product</h3>
                    </a>
                    <a href="#">
                    <span className="material-icons-sharp">logout</span>
                    <h3>logout</h3>
                    </a>
                </div>
            </aside>
            {/* ---------------- END OF ASIDE ---------------- */}
            <main>
                <h1>Dashboard</h1>

                <div className='date'>
                    <input type="date" />
                </div>

                <div className='insights'>
                    <div className='sales'>
                        <span className='material-icons-sharp'>analytics</span>
                        <div className="middle">
                            <div className="left">
                                <h3>total sales</h3>
                                <h1>$25,024</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="number">
                                    <p>81%</p>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Last 24 Hours</small>
                    </div>
                    {/* ---------------- END OF SALES ---------------- */}
                    <div className='expenses'>
                        <span className='material-icons-sharp'>bar_chart</span>
                        <div className="middle">
                            <div className="left">
                                <h3>total expenses</h3>
                                <h1>$14,160</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="number">
                                    <p>62%</p>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Last 24 Hours</small>
                    </div>
                    {/* ---------------- END OF EXPENSES ---------------- */}
                    <div className='income'>
                        <span className='material-icons-sharp'>stacked_line_chart</span>
                        <div className="middle">
                            <div className="left">
                                <h3>total income</h3>
                                <h1>$10,864</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="number">
                                    <p>44%</p>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Last 24 Hours</small>
                    </div>
                    {/* ---------------- END OF INCOME ---------------- */}
                </div>
                {/* ---------------- END OF INSIGHTS ---------------- */}
                <div className='recent-orders'>
                        <h2>Recent orders</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product name</th>
                                    <th>Product number</th>
                                    <th>Payment</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Foldable mini drone</td>
                                <td>85631</td>
                                <td>Due</td>
                                <td className='warning'>Pending</td>
                                <td className='primary'>Details</td>
                            </tr>
                            <tr>
                                <td>Foldable mini drone</td>
                                <td>85631</td>
                                <td>Due</td>
                                <td className='warning'>Pending</td>
                                <td className='primary'>Details</td>
                            </tr>
                            <tr>
                                <td>Foldable mini drone</td>
                                <td>85631</td>
                                <td>Due</td>
                                <td className='warning'>Pending</td>
                                <td className='primary'>Details</td>
                            </tr>
                            <tr>
                                <td>Foldable mini drone</td>
                                <td>85631</td>
                                <td>Due</td>
                                <td className='warning'>Pending</td>
                                <td className='primary'>Details</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="#">Show all</a>
                </div>
            </main>
            {/* ---------------- END OF MAIN ---------------- */}
            <div className="right">
                <div className="top">
                    <button id='menu-btn' onClick={(e) => {handleMenuBtn(e)}}>
                        <span className='material-icons-sharp'>menu</span>
                    </button>
                    <div className="theme-toggler" onClick={(e) => {handleThemeToggler(e)}}>
                        <span className='material-icons-sharp active'>light_mode</span>
                        <span className='material-icons-sharp'>dark_mode</span>
                    </div>
                    <div className="profile">
                        <div className="info">
                            <p>Hey, <b>Alejo</b></p>
                            <small className='text-muted'>Admin</small>
                        </div>
                        <div className="profile-photo">
                            <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="profile-photo" />
                        </div>
                    </div>
                </div>
                {/* ---------------- END OF TOP ---------------- */}
                <div className="recent-updates">
                    <h2>Recent updates</h2>
                    <div className="updates">
                        <div className="update">
                            <div className="profile-photo">
                                <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="profile-photo" />
                            </div>
                            <div className="message">
                                <p><b>irelia</b> received something</p>
                                <small className="text-muted">2 Minutes ago</small>
                            </div>
                        </div>
                        <div className="update">
                            <div className="profile-photo">
                                <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="profile-photo" />
                            </div>
                            <div className="message">
                                <p><b>veigar</b> received something</p>
                                <small className="text-muted">2 Minutes ago</small>
                            </div>
                        </div>
                        <div className="update">
                            <div className="profile-photo">
                                <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="profile-photo" />
                            </div>
                            <div className="message">
                                <p><b>brand</b> received something</p>
                                <small className="text-muted">2 Minutes ago</small>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---------------- END OF RECENT UPDATES ---------------- */}
                <div className="sales-analytics">
                    <h2>Sales analytics</h2>
                    <div className="item online">
                        <div className="icon">
                            <span className='material-icons-sharp'>shopping_cart</span>
                        </div>
                        <div className="right">
                            <div className="info">
                                <h3>ONLINE ORDERS</h3>
                                <small className="text-muted">Last 24 hours</small>
                            </div>
                            <h5 className='success'> +39%</h5>
                            <h3>3849</h3>
                        </div>
                    </div>
                    <div className="item offline">
                        <div className="icon">
                            <span className='material-icons-sharp'>local_mall</span>
                        </div>
                        <div className="right">
                            <div className="info">
                                <h3>OFFLINE ORDERS</h3>
                                <small className="text-muted">Last 24 hours</small>
                            </div>
                            <h5 className='danger'> -17%</h5>
                            <h3>1109</h3>
                        </div>
                    </div>
                    <div className="item customers">
                        <div className="icon">
                            <span className='material-icons-sharp'>person</span>
                        </div>
                        <div className="right">
                            <div className="info">
                                <h3>NEW CUSTOMERS</h3>
                                <small className="text-muted">Last 24 hours</small>
                            </div>
                            <h5 className='success'> 25%</h5>
                            <h3>365</h3>
                        </div>
                    </div>
                    <div className="item add-product">
                        <div>
                            <span className='material-icons-sharp'>add</span>
                            <h3>Add product</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
