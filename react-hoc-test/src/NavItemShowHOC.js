function NavItemShowHOC(WrapperedComponent){
  return function showWrapped(props){
    return props.show && <WrapperedComponent {...props}/>
  }
}

export default NavItemShowHOC;