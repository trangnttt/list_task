var initialState = [
    {
        id : 1,
        name : 'Iphone 7 Plus',
        image : '',
        description: 'Sản phẩm do apply sản xuất',
        price : 500,
        inventory : 10,
    },
    {
        id : 2,
        name : 'Samsung galaxy s7',
        image : '',
        description: 'Sản phẩm do samsung sản xuất',
        price : 400,
        inventory : 10
    },
    {
        id : 3,
        name : 'Oppo F1s',
        image : '',
        description: 'Sản phẩm do china sản xuất',
        price : 300,
        inventory : 10
    }
];

const product = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}
export default product;