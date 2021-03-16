import {useEffect} from "react";

const useComponentDidMount = (callback) => {
  useEffect(() => {callback()}, []);
}

export default useComponentDidMount;
