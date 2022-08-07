import '@fontsource/open-sans/700.css'
import '@fontsource/raleway/400.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ChakraProvider} from '@chakra-ui/react'
import theme from './config/theme'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App/>
		</ChakraProvider>
	</React.StrictMode>
)
