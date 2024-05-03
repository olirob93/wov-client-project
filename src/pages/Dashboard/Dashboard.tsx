import Header from "../../components/Header/Header"
import NavigationAdmin from "../../components/NavigationAdmin/NavigationAdmin"
import ButtonContainer from "../../containers/ButtonContainer/ButtonContainer"
import Groups from "../../containers/Groups/Groups"
import groups from "../../mockData/groups"
import { InputAdornment, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
import "./DashBoard.scss"



const Dashboard = () => {
  return (
    <div className="dashboard">
        <Header subtitle={"Dashboard"}/>
        <ButtonContainer/>
        <div className="search-bar">
          <TextField  
          InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className="search-icon" />
                </InputAdornment>
              ),
            }}
          placeholder="Search by task, category" variant="outlined" role="search" />
        </div>
        <Groups groups={groups}/>
        <NavigationAdmin navActionIndex={0}/>
      
    </div>
  )
}

export default Dashboard
/*
<div className="task-page__search-container">
        <TextField
          className="task-page__input"
          id="task-search"
          placeholder="Search by task, category"
          variant="outlined"
          role="search"
          onChange={handleTaskSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className="search-icon" />
              </InputAdornment>
            ),
          }}
        />
      </div>

      sx={{borderRadius: '30px' , border: '1px solid black'}}

*/