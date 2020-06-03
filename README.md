# Animations in React Apps

## React Transition Group Package
It is a package created by the vibrant react community and this is a package which allows you to smoothly animate elements when they are added and removed to and from the dom.

[https://github.com/reactjs/react-transition-group](https://github.com/reactjs/react-transition-group)


```sh
yarn add react-transition-group
```
#### Transition Component Example
```jsx
import Transition from 'react-transition-group/Transition'; //can be any name for the component

<Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit>
          {/* {state => <p>{state}</p>} 
              To see the state entering/entered VS exiting/exited */}
          {state => (
            <div style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
              margin: "10px auto",
              transition: "opacity 1s ease-out",
              opacity: state === 'exiting' ? 0 : 1
            }}></div>
          )}
        </Transition>
```