import { useUserAuth } from '@contexts/AuthContext';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { AnimatePresence, motion } from 'framer-motion';
import { Copy, CopySuccess, LogoutCurve, Profile2User } from 'iconsax-react';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Dropdown, Name, Option, ProfileSection, StyledArrowDown2, Uid, Wrapper } from './NavbarDropdown.styles';

const NavbarDropdown = ({ user }) => {
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const drop = useRef(null);
    const uidRef = useRef(null);
    const { logOut } = useUserAuth();
    const navigate = useNavigate();

    useOnClickOutside(drop, () => setOpen(false));

    const copyUidToClipboard = (e) => {
        navigator.clipboard.writeText(user.uid);
        setCopied(true);
        setTimeout(function () {
            setCopied(false);
        }, 1000);
    };

    return (
        <Wrapper>
            <div className="drop">
                <StyledArrowDown2 onClick={() => setOpen(true)} open={open} size="20" variant="Bold" />
            </div>
            <AnimatePresence>
                {open && (
                    <Dropdown
                        ref={drop}
                        as={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}>
                        <ProfileSection>
                            <Avatar onClick={() => (navigate('/profile'), setOpen(false))} src={user.photoURL} alt="" draggable={false} />
                            <Name onClick={() => (navigate('/profile'), setOpen(false))}>{user.displayName}</Name>
                            <Uid onClick={copyUidToClipboard} ref={uidRef}>
                                <p>#{user.uid}</p>
                                <span>
                                    {copied ? <CopySuccess color="#6A5AE0" size="16" variant="Outline" /> : <Copy size="16" variant="Outline" />}
                                </span>
                            </Uid>
                        </ProfileSection>
                        <Option onClick={() => (navigate('/friends'), setOpen(false))}>
                            <Profile2User size="15" color="#001833" variant="Outline" />
                            <p>Friends</p>
                        </Option>
                        <Option onClick={() => (logOut(), setOpen(false))}>
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
