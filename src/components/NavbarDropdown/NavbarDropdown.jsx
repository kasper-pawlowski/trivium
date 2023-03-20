import { useUserAuth } from '@contexts/AuthContext';
import useCopyToClipboard from '@hooks/useCopyToClipboard';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { AnimatePresence, motion } from 'framer-motion';
import { Copy, CopySuccess, LogoutCurve, Profile2User } from 'iconsax-react';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Dropdown, Name, Option, ProfileSection, StyledArrowDown2, Uid, Wrapper } from './NavbarDropdown.styles';

const NavbarDropdown = () => {
    const { copyUidToClipboard, copied } = useCopyToClipboard();
    const { ref, isComponentVisible, setIsComponentVisible } = useOnClickOutside(false);
    const uidRef = useRef(null);
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();

    return (
        <Wrapper>
            <div className="drop">
                <StyledArrowDown2
                    onClick={() => setIsComponentVisible(true)}
                    {...(isComponentVisible && { iscomponentvisible: isComponentVisible.toString() })}
                    size="20"
                    variant="Bold"
                />
            </div>
            <AnimatePresence>
                {isComponentVisible && (
                    <Dropdown
                        ref={ref}
                        as={motion.div}
                        initial={{ opacity: 0, scale: 0.6, y: -50, x: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.6, y: -50, x: 50 }}
                        transformOrigin="top right"
                        transition={{ duration: 0.2 }}>
                        <ProfileSection>
                            <Avatar
                                onClick={() => (navigate(`/user/${user.uid}`), setIsComponentVisible(false))}
                                src={user.photoURL}
                                alt=""
                                draggable={false}
                            />
                            <Name onClick={() => (navigate(`/user/${user.uid}`), setIsComponentVisible(false))}>{user.displayName}</Name>
                            <Uid onClick={() => copyUidToClipboard(user.uid)} ref={uidRef}>
                                <p>#{user.uid}</p>
                                <span>
                                    {copied ? <CopySuccess color="#6A5AE0" size="16" variant="Outline" /> : <Copy size="16" variant="Outline" />}
                                </span>
                            </Uid>
                        </ProfileSection>
                        <Option onClick={() => (navigate('/friends'), setIsComponentVisible(false))}>
                            <Profile2User size="15" color="#001833" variant="Outline" />
                            <p>Friends</p>
                        </Option>
                        <Option onClick={() => (logOut(), setIsComponentVisible(false), navigate('/'))}>
                            <LogoutCurve size="15" color="#001833" variant="Outline" />
                            <p>Log out</p>
                        </Option>
                    </Dropdown>
                )}
            </AnimatePresence>
        </Wrapper>
    );
};

export default NavbarDropdown;
