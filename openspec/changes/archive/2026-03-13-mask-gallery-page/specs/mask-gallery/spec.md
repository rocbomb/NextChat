## ADDED Requirements

### Requirement: Display mask gallery page
The system SHALL display a gallery page at `/mask-gallery` showing all available masks in a list format.

#### Scenario: User navigates to mask gallery
- **WHEN** user navigates to `/#/mask-gallery`
- **THEN** system displays a page showing all available masks

#### Scenario: Gallery shows all masks
- **WHEN** mask gallery page loads
- **THEN** system displays both builtin masks and user-created masks

### Requirement: Mask card displays basic info
Each mask card SHALL display the mask avatar and name.

#### Scenario: Mask card shows avatar and name
- **WHEN** a mask is displayed in the gallery
- **THEN** the card shows the mask's avatar emoji and name

### Requirement: Click to start conversation
The system SHALL allow users to click a mask card to start a new conversation with that mask.

#### Scenario: Click mask to navigate
- **WHEN** user clicks on a mask card
- **THEN** system navigates to `/#/new-chat?mask={maskId}`

#### Scenario: Direct link works correctly
- **WHEN** user navigates to `/#/new-chat?mask=100000`
- **THEN** system opens a new chat with the specified mask loaded
