// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log('DB CONNECTED');
})();

( (name) => {
    console.log(`DB Connected Two ${name}`);
} ) ('Raja')