import React from 'react';

class HistoryComponet extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
       

        return (
            <div>
 

    <h2>History</h2>
    <div>This is a purchase order processing database of Boston Papers Company. The company produces
    papers and sells them to office supply retail stores. The following is a description of the order
    processing database and other relevant information.
    1. The customers of Boston Papers Company are retail office supply stores (e.g., Officemax,
    Officedepot, Staples, Walmart, Target, etc.). Each customer has one headquarter and one or
    more branch stores in MA. Note that you should not create an entity for Boston Papers
    Company itself.
    2. For each customer headquarter, we want to store the name of the customer ((e.g., Officemax,
    Officedepot, Staples, Walmart, Target, etc.), address, and phone number.
    2. For each branch store of a customer, we want to keep a branch number, address, and phone
    number. A branch number is an integer starting with 1 and is not unique among all branch
    stores. It is unique only among those that belong to the same retail store. For example,
    Officemax has three branch stores and their branch numbers are 1, 2, and 3; Officedepot has
    two branch stores and their branch numbers are 1 and 2.
    3. Boston Papers produces many different types of papers and each type of paper has a unique
    type number, size, weight, and unit price.
    4. An order is issued by a retail store headquarter. For each order, we want to keep the following
    information.
     (1) A unique order number
    (2) The retail store who issued the order
    (3) Order date and order amount (in Dollars)
    (4) The employee(s) of the Boston Papers who handle the order
    5. An order consists of one or more suborders. Each suborder has a suborder number. This
    suborder number is an integer starting with 1 and is not unique among all suborders. It is
    unique only among those that belong to a particular order. A suborder is shipped to exactly
    one branch store. A suborder includes one or more paper types. In addition to the suborder
    number, for each suborder, we want to keep the following information in the database:
    (1) The branch store the suborder is shipped to
    (2) Required shipping date
    (3) Actual shipping date
    (4) Quantity of each paper type included in the suborder </div>
            
            </div>
            
        );
    }
}

export default HistoryComponet;