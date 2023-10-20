code snippets:

////////////////////////////////////////////////


import React, { useState } from 'react';

const PriceComponent = () => {
const [price, setPrice] = useState(100);
const [buttons, setButtons] = useState([
{ label: 'Button 1', amount: 20, clicked: false },
{ label: 'Button 2', amount: 30, clicked: false },
// Add more buttons here
]);

const handleButtonClick = (index) => {
const updatedButtons = buttons.map((button, i) => {
if (i === index) {
if (button.clicked) {
setPrice(price - button.amount);
return { ...button, clicked: false };
} else {
setPrice(price + button.amount);
return { ...button, clicked: true };
}
}
return button;
});

    setButtons(updatedButtons);

};

return (

<div>
<h2>Price: {price}$</h2>
{buttons.map((button, index) => (
<button key={index} onClick={() => handleButtonClick(index)}>
{button.label}
</button>
))}
</div>
);
};

export default PriceComponent;

////////////////////////////////////////////////
