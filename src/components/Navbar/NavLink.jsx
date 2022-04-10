import {
   Link
  } from '@chakra-ui/react';
import { Link as RouteLink, useResolvedPath, useMatch } from 'react-router-dom';

function NavLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    const isHomePage = resolved.pathname === "/" && match;
    return (
        <Link
            as={RouteLink} 
            to={to} 
            textDecoration="none" 
            display={isHomePage ? 'none' : 'flex'} 
            alignItems="center"
            color={match ? "blue.400" : ""}
            _hover={{
                color: 'blue.400'
            }}
            
            {...props}
        >
          {children}
        </Link>
    );
}

export default NavLink;