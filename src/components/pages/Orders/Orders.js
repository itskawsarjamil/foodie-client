import React from 'react';

const Orders = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>company</th>
                            <th>location</th>
                            <th>Last Login</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td>12/16/2020</td>
                            <td>Blue</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Zemlak, Daniel and Leannon</td>
                            <td>United States</td>
                            <td>12/5/2020</td>
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Carroll Group</td>
                            <td>China</td>
                            <td>8/15/2020</td>
                            <td>Red</td>
                        </tr>
                        
                        <tr>
                            <th>6</th>
                            <td>Irma Vasilik</td>
                            <td>Editor</td>
                            <td>Wiza, Bins and Emard</td>
                            <td>Venezuela</td>
                            <td>12/8/2020</td>
                            <td>Purple</td>
                        </tr>                      
                        
                        <tr>
                            <th>12</th>
                            <td>Sophi Biles</td>
                            <td>Recruiting Manager</td>
                            <td>Gutmann Inc</td>
                            <td>Indonesia</td>
                            <td>2/12/2021</td>
                            <td>Maroon</td>
                        </tr>
                        <tr>
                            <th>13</th>
                            <td>Florida Garces</td>
                            <td>Web Developer IV</td>
                            <td>Gaylord, Pacocha and Baumbach</td>
                            <td>Poland</td>
                            <td>5/31/2020</td>
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>14</th>
                            <td>Maribeth Popping</td>
                            <td>Analyst Programmer</td>
                            <td>Deckow-Pouros</td>
                            <td>Portugal</td>
                            <td>4/27/2021</td>
                            <td>Aquamarine</td>
                        </tr>
                        
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>company</th>
                            <th>location</th>
                            <th>Last Login</th>
                            <th>Favorite Color</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Orders;