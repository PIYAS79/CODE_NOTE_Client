import TimeLine_All_Codes from "../components/TimeLine_All_Codes"
import TimeLine_All_Users from "../components/TimeLine_All_Users"
import { useAppSelector } from "../redux/hooks"


const TimeLine_Left_Layout = () => {

  const selectValue = useAppSelector(state=>state.timeline.searchSelect_value);
  // console.log(selectValue);
  if(selectValue === 'code'){
    return <TimeLine_All_Codes/>
  }else{
    return <TimeLine_All_Users/>
  }
}

export default TimeLine_Left_Layout