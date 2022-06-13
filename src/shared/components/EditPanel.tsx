import React from 'react'
import Fab from '@mui/material/Fab'
import EditIcon from '@mui/icons-material/Edit'
import TitleIcon from '@mui/icons-material/Title'
import CheckIcon from '@mui/icons-material/Check'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import EditLocationIcon from '@mui/icons-material/EditLocation'
import { Typography, Stack } from '@mui/material'
import Grow from '@mui/material/Grow'

const EditPanel = () => {
  const [btnState, setBtnState] = React.useState<Boolean>(false)
  const [overState, setOverState] = React.useState<any>(false)
  const [currentFile, setCurrentFile] = React.useState<any>(null);
  const editClickHandler = () => {
    setBtnState(!btnState)
  }
  const editOverHandler = () => {
    setOverState(true)
  }
  const editOutHandler = () => {
    console.log('out')
    setOverState(false)
  }
  return (
    <Typography component="div" className="edit-panel">
      <Stack
        spacing={2}
        alignItems="center"
        onMouseLeave={() => editOutHandler()}
      >
        <Grow
          in={overState}
          style={{ transformOrigin: '-1 -1 -1' }}
          {...(overState ? { timeout: 1000 } : {})}
        >
          <Stack spacing={2} alignItems="center">
            <Fab
              color="warning"
              aria-label="add"
              size="small"
            >
              <EditLocationIcon />
            </Fab>
            <Fab
              color="inherit"
              aria-label="add"
              size="small"
            >
              <AttachFileIcon />
            </Fab>
            <Fab
              color="primary"
              aria-label="add"
              size="small"
            >
              <Typography
                component="span"
                sx={{ fontFamily: 'Reenie Beanie,cursive' }}
              >
                Abc
              </Typography>
            </Fab>
            <Fab
              color="error"
              aria-label="add"
              size="small"
            >
              <CheckIcon />
            </Fab>
            <Fab
              color="error"
              aria-label="add"
              size="small"
            >
              <TitleIcon />
            </Fab>
          </Stack>
        </Grow>

        <Fab
          color={btnState ? 'error' : 'success'}
          aria-label="add"
          onClick={editClickHandler}
          onMouseOver={editOverHandler}
        >
          {btnState && <TitleIcon />}
          {!btnState && <EditIcon />}
        </Fab>
      </Stack>
    </Typography>
  )
}

export default EditPanel
