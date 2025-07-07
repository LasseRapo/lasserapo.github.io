---
title: "TTN AWS IoT Project"
excerpt: "An end-to-end IoT project, starting from reading sensor data to storing the data securely in the cloud. <br/><img src='/images/iot.png'>"
collection: projects
# github: "https://github.com/LasseRapo/TTN-AWS-IoT-Project"
---

## Overview

This project demonstrates a comprehensive end-to-end IoT solution that showcases the complete data flow from sensor readings to cloud storage. The architecture leverages the FIT IoT-LAB testbed, The Things Network (TTN), and Amazon Web Services (AWS).

The system workflow follows this path: IoT devices in the FIT IoT-LAB testbed collect sensor data, transmit it via LoRaWAN to The Things Network, which then forwards the data to AWS DynamoDB using MQTT protocol for secure cloud storage and analysis.

**📺 Demo Video**: [Watch the project demonstration](https://youtu.be/l7ZJS32fN-E)

## Key Features

- **End-to-End IoT Pipeline**: Complete data flow from sensor to cloud storage
- **LoRaWAN Communication**: Low-power, long-range wireless communication protocol
- **Cloud Integration**: Seamless integration with AWS cloud services
- **Real-time Data Processing**: MQTT-based real-time data forwarding
- **Secure Data Storage**: AWS DynamoDB for reliable and scalable data persistence
- **Testbed Integration**: Utilizes professional IoT testbed infrastructure (FIT IoT-LAB)

## Technology Stack

- **IoT Platform**: FIT IoT-LAB testbed
- **Communication Protocol**: LoRaWAN
- **Network Server**: The Things Network (TTN)
- **Message Protocol**: MQTT
- **Cloud Provider**: Amazon Web Services (AWS)
- **Database**: AWS DynamoDB

## Architecture

The project implements a three-tier IoT architecture:

1. **Device Layer**: Sensor nodes in FIT IoT-LAB collect environmental data
2. **Network Layer**: LoRaWAN connectivity through TTN for long-range communication
3. **Cloud Layer**: AWS services for data storage, processing, and analytics

## Repository

The complete source code and detailed setup instructions are available on GitHub. The repository includes sensor source code, a comprehensive documentation for replicating the project, and an evaluation of the efficiency and resilience of the project.

[View on GitHub](https://github.com/LasseRapo/TTN-AWS-IoT-Project)
