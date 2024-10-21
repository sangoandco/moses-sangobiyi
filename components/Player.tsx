// File: Player.tsx
"use client";

import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styles from '../app/Player.module.css';

const Player = () => (
  <AudioPlayer
    className={styles.rhap_container}
    autoPlay={false}
    src="/moses-dive.wav"
    onPlay={(e) => console.log("onPlay")}
    // showJumpControls={false} // Hide skip forward/backward buttons
    customAdditionalControls={[]} // Hide additional controls (including loop button)
    // customVolumeControls={[]} // Hide volume control
    // customProgressBarSection={["RHAP_UI.PROGRESS_BAR"]} // Display only the progress bar
  />
);

export default Player;
