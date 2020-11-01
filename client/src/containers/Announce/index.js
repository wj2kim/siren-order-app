import React, { useState, useEffect } from 'react'
import { request, api } from 'utils/api';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#fff',
        borderRadius: '4px',
        width: '100%',
        boxShadow: '0 10px 20px rgba(0,0,0,0.08), 0 1px 1px rgba(0,0,0,0.13)',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    '&.Mui-focused fieldset': {
        borderColor: 'green',
    },
}));

// const EnhancedTableToolbar = (props) => {
//   const classes = useToolbarStyles();
//   const { IdSelected , handleFinished, resetSelection, orderListLength } = props;
//   const numSelected = IdSelected.length;

//   return (
//     <Toolbar className="" >
//         <Typography className={classes.title} variant="h6" style={{fontWeight:'800'}} id="tableTitle" component="div">
//           공지사항
//         </Typography>
//       {/* {numSelected > 0 ? (
//         <Tooltip title="완료">
//           <IconButton aria-label="finished" onClick={ e => {handleFinished(e, IdSelected); resetSelection()}} >
//             <CheckCircleIcon />
//           </IconButton>
//         </Tooltip>
//       ) : ( */}
//         <Tooltip title={orderListLength > 0 ? '커피 제조중...' : '주문 대기중...'}>
//           <IconButton aria-label="coffee-icon">
//             <FreeBreakfastIcon />
//           </IconButton>
//         </Tooltip>
//       {/* )} */}
//     </Toolbar>
//   );
// };

const Announce = () => {
    const [ announcement, setAnnouncement] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);

    const classes = useStyles();
    const selectAnnouncementURL = '/selectAnnouncement';
    const replaceAnnouncementURL = '/replaceAnnouncement';

    useEffect(() => {
        loadAnnouncement(selectAnnouncementURL);
    }, []);

    const loadAnnouncement = async (requestURL, announcement) => {
        setIsLoading(true);
        try{
            let response;
            if(!announcement){
                response = await request(requestURL);
            }else{
                response = await request(requestURL, {announcement})
            }
            if( response.status === 200 ){
                setAnnouncement(response.data.announcement)
            }
        }catch(err){
            console.log("loadAnnouncement err", err);
        }
        setIsLoading(false);
    }

    return(
        <div className={ classes.root}  style={{ marginTop:'6rem'}}>
            <div className="announcement-head" style={{ fontSize:'1.20rem', fontWeight:800, padding: '1rem 1rem 0.6rem 1rem'}}>
                공지사항
            </div>
           <TextField
                className="announcement-area"
                id="outlined-full-width"
                // label="공지사항"
                style={{ margin: 12 , width: '97%', padding:'0px 1rem 0.5rem 1rem'}}
                placeholder={ announcement }
                helperText="오늘의 한마디를 적어주세요!"
                fullWidth
                // style={{ width:'95%'}}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                // color="secondary"
            />
        </div>
    )
}

export default Announce;