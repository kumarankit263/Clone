import PropTypes from 'prop-types'
import { styled, alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { Typography } from '@mui/material'
import './AppbarActual.css'

const AppbarActual = ({ handleLogin }) => {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(6.75),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '36ch',
            },
        },
    }))

    return (
        <Box>
            <AppBar position='fixed' className='appbar'>
                <Toolbar>
                    <Typography variant='h4'>
                        SONGIFY
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Button className='spotifyButton' onClick={handleLogin}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

AppbarActual.propTypes = {
    handleLogin: PropTypes.func.isRequired,
}

export default AppbarActual
