import { React } from "react";
import NavItemShowHOC from "./NavItemShowHOC";

const NavItem = ({ to, show, text }) => {
  return (
    <li>
      <a href={to}>{text}</a>
    </li>
  );
};

export default NavItem;
// export default NavItemShowHOC(NavItem);

// HOC를 이용해 컴포넌트를 묶어주면 코드를 줄일 수 있다. && 연산자 또는 조건부랜더링을 줄여보자
// 원래는 a태그만 없애려했는데 생각해보니 해당 컴포넌트가 전체 묶여서 a를 감싸는 li부터 랜더링을 막는다.
// 컴포넌트 단위로 수행할 수 있군.
// return (
//   <li>
//     {show && <a href={to}>{text}</a>}
//   </li>
// );
