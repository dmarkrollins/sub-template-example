Template.parentTemplate.helpers({
    customCallback(data) {
        // data contains the data context of parent since from parent we passed in 'this'
        // in this example data has nothing interesting but if parent was populated with subscription data
        // it would be in data
        const title = 'Custom Title' 
        // returns an object with a the parent data context and a title the child 
        // can display and a function the child can call
        // both will be in the data context of the child 
        // customFunction is evenutally passed a 'Special Message' to display from child (see child.js events)
        return {
            data,
            title,
            customFunction(message) {
                alert(message)
            }
        }
    }
})
