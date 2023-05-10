import './App.css';

function App() {
  //1. To combine arrays
  const numbersOne = [1, 2, 3];
  const numbersTwo = [4, 5, 6];
  const numbersCombined = [...numbersOne, ...numbersTwo];
  console.log('To combine arrays', numbersCombined);

  //2. The spread operator ... is used to expand or spread an iterable or an array
  const arrValue = ['My', 'name', 'is', 'Jack'];
  console.log(...arrValue)

  //3. copy an array
  const arr1 = ['one', 'two'];
  const arr2 = [...arr1, 'three', 'four', 'five'];
  console.log(arr2);

  //4. Clone Array Using Spread Operator
  let arr3 = [1, 2, 3];
  let arr4 = arr3;

  console.log(arr3); // [1, 2, 3]
  console.log(arr4); // [1, 2, 3]
  arr3.push(4);

  console.log(arr3); // [1, 2, 3, 4]
  console.log(arr4); // [1, 2, 3, 4]
  //5. Spread Operator with Object
  const obj1 = { x: 1, y: 2 };
  const obj2 = { z: 3 };

  // add members obj1 and obj2  to obj3
  const obj3 = { ...obj1, ...obj2 };

  console.log(obj3); // {x: 1, y: 2, z: 3}
  return (
    <div className="App">
      Spread operators
    </div>
  );
}

export default App;
