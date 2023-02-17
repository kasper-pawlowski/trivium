import { useUserAuth } from '@contexts/AuthContext';
import { LogoutCurve, Profile2User } from 'iconsax-react';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Dropdown, Option, ProfileSection, StyledArrowDown2, Wrapper } from './NavbarDropdown.styles';

const NavbarDropdown = ({ user }) => {
    const [open, setOpen] = useState(false);
    const drop = useRef(null);
    const { logOut } = useUserAuth();
    const navigate = useNavigate();

    const handleClick = (e) => {
        if (!e.target.closest(`.${drop.current.className}`) && open) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });

    return (
        <Wrapper>
            <div className="drop" ref={drop}>
                <StyledArrowDown2 onClick={() => setOpen((open) => !open)} open={open} size="20" variant="Bold" />
            </div>
            {open && (
                <Dropdown>
                    <ProfileSection onClick={() => navigate('/profile')}>
                        <Avatar src={user.photoURL} alt="" draggable={false} />
                        <p>{user.displayName}</p>
                    </ProfileSection>
                    <Option onClick={() => navigate('/friends')}>
                        <Profile2User size="15" color="#001833" variant="Outline" />
                        <p>Friends</p>
                    </Option>
                    <Option onClick={logOut}>
                        <LogoutCurve size="15" color="#001833" variant="Outline" />
                        <p>Log out</p>
                    </Option>
                </Dropdown>
            )}
        </Wrapper>
    );
};

export default NavbarDropdown;
