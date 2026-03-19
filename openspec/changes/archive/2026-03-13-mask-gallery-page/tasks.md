## 1. Route Configuration

- [x] 1.1 Add `MaskGallery = "/mask-gallery"` to Path enum in `app/constant.ts`
- [x] 1.2 Add route in `app/components/home.tsx` for MaskGallery component

## 2. Component Implementation

- [x] 2.1 Create `app/components/mask-gallery.tsx` component
- [x] 2.2 Fetch all masks using `useMaskStore.getAll()`
- [x] 2.3 Render mask cards with avatar and name
- [x] 2.4 Implement click handler to navigate to `/#/new-chat?mask={id}`

## 3. Testing

- [x] 3.1 Verify page loads at `/#/mask-gallery`
- [x] 3.2 Verify all masks are displayed
- [x] 3.3 Verify clicking a mask navigates to new-chat with correct mask ID
