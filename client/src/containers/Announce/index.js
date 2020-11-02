import React, { useState, useEffect } from 'react'
import { request, api } from 'utils/api';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';



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
    saveButton: {
      width:'6.2rem',
      marginRight: '1.6rem',
      marginTop: '0.8rem',
      height: '3.2rem',
    },
    customLabel : {
      '& .MuiInputLabel-outlined' : {
        marginLeft : "1rem",
      }
    }
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
    const [ prevAnnouncement, setPrevAnnouncement] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const [ saveComplete, setSaveComplete] = useState(false);

    const classes = useStyles();
    const selectAnnouncementURL = '/selectAnnouncement';
    const replaceAnnouncementURL = '/replaceAnnouncement';

    useEffect(() => {
        loadAnnouncement(selectAnnouncementURL);
        setPrevAnnouncement('오늘 하루는 쉽니다.');
        setAnnouncement('오늘 하루는 쉽니다.');
    }, []);

    const loadAnnouncement = async (requestURL, announcement = '') => {
        setIsLoading(true);
        try{
            let response;
            if(announcement.length < 1){
                response = await request(requestURL);
            }else{
                response = await request(requestURL, {announcement})
                if(response.status === 200){
                  setSaveComplete(true);
                }
            }
            if( response.status === 200 ){
                setPrevAnnouncement(response.data.announcement);
                setAnnouncement(response.data.announcement);
            }else{
              console.log("loadAnnouncement err", response.data.message);
            }
        }catch(err){
            console.log("loadAnnouncement err", err);
        }
        setIsLoading(false);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      loadAnnouncement(replaceAnnouncementURL, announcement);
    }

    const handleAnnouncementChange = (e) => {
      e.preventDefault();
      setAnnouncement(e.target.value);
    }

    return(
        <div className={ classes.root}  style={{ marginTop:'6rem'}}>
            <div className="announcement-head" style={{ fontSize:'1.20rem', fontWeight:800, padding: '1rem 1rem 0.6rem 1rem'}}>
                공지사항
            </div>
            <form className="announce-form" noValidate autoComplete="off" onSubmit={handleSubmit}>
              <div style={{ display:'flex'}}>
              <TextField
                    className={ classes.customLabel }
                    id="outlined-full-width"
                    label="오늘의 한마디를 적어보세요!"
                    style={{ margin: 12 , width: '97%', padding:'0px 1rem 0.5rem 1rem'}}
                    // placeholder={ announcement }
                    helperText={saveComplete && prevAnnouncement === announcement ? '공지사항을 성공적으로 등록했습니다!' : '오늘의 스페셜 음료나 이벤트등을 공유할 수 있습니다.'}
                    fullWidth
                    // style={{ width:'95%'}}
                    value={announcement}
                    onChange={handleAnnouncementChange}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    // color="secondary"
                />
                <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="default"
                  className={classes.saveButton}
                  startIcon={<SaveIcon />}
                  disabled={prevAnnouncement === announcement ? true : false}
                  >
                  저장
                </Button>
                </div>
              </div>
            </form>
        </div>
    )
}

export default Announce;