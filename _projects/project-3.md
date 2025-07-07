---
title: "Speech Recognition using Bluetooth"
excerpt: "A simple speech recognition system controlling an ESP32 through a Bluetooth Low Energy (BLE) connection. The speech recognition model is developed using Edge Impulse and deployed on the Seeed Xiao BLE nRF52840 Sense board. <br/><img src='/images/speech_recognition.png'>"
collection: projects
# github: "https://github.com/LasseRapo/nRF52840-SpeechRecognition-BLE"
---

## Overview

This project demonstrates a speech recognition system that combines edge AI computing with wireless communication to create a voice-controlled IoT device.

The system uses a Seeed Xiao BLE nRF52840 Sense board running a custom-trained speech recognition model to process voice commands locally, then transmits control signals to an ESP32 via Bluetooth Low Energy (BLE) for device control.

The system utilizes the SoundxVision ring prototype form factor, making it a wearable voice interface.

## Key Features

- **Custom ML Model**: Speech recognition model trained and optimized using Edge Impulse
- **Bluetooth Low Energy**: Efficient wireless communication between devices
- **Wearable**: Integrated into SoundxVision ring prototype
- **Real-time Feedback**: LCD display provides connection status and command feedback
- **Low Power Design**: Optimized for battery-powered operation
- **Visual Indicators**: RGB LED for status indication and user feedback

## Technology Stack

- **Primary MCU**: Seeed Xiao BLE nRF52840 Sense (Nordic nRF52840)
- **Secondary MCU**: ESP32 (control target)
- **ML Platform**: Edge Impulse for model training and deployment
- **Communication**: Bluetooth Low Energy (BLE) 5.0
- **Audio Processing**: PDM microphone with DSP
- **Display**: LCD screen for status feedback
- **Indicators**: RGB LED for visual feedback

## Hardware Integration

The project leverages the SoundxVision ring prototype, which provides:
- Compact wearable form factor
- Integrated microphone and processing unit
- Wireless connectivity

## Repository

The repository contains the source code for the nRF52840 and ESP32 boards, and provides step-by-step instructions for training custom speech models and deploying them to the embedded devices.

[View on GitHub](https://github.com/LasseRapo/nRF52840-SpeechRecognition-BLE)