# Bottom Navigation Component

## 📱 Mobile Bottom Navigation

A fixed bottom navigation bar that appears only on mobile devices (hidden on desktop). Features smooth animations, active state indicators, and auto-hide on scroll.

---

## ✨ Features

- **Mobile-Only Display**: Hidden on desktop (md breakpoint and above)
- **Smart Auto-Hide**: Hides when scrolling down, shows when scrolling up
- **Active State**: Highlights current page with color and indicator dot
- **Smooth Animations**: Transitions for show/hide and active state
- **Accessible**: Proper ARIA labels and semantic HTML
- **5 Navigation Items**:
  - Home
  - Course Finder (AI College Finder)
  - Events
  - Contact
  - FAQs

---

## 🎨 Design

- **Height**: 64px (h-16)
- **Background**: White with top border
- **Shadow**: Elevated shadow for prominence
- **Icons**: Lucide React icons (24px)
- **Active Color**: Primary-800 (brand blue)
- **Inactive Color**: Gray-500 with hover effect
- **Indicator**: Secondary-500 dot below active icon

---

## 🔧 Usage

The component is automatically included in the root layout and appears on all pages.

```jsx
// Already added to src/app/layout.js
import BottomNavigation from "@/components/ui/BottomNavigation";

<BottomNavigation />
```

---

## 📐 Component Structure

```
BottomNavigation
├── Spacer (h-20) - Prevents content overlap
└── Nav (fixed bottom)
    ├── Navigation Items (5)
    │   ├── Icon
    │   ├── Active Indicator Dot
    │   └── Label
    └── Active Tab Bar (top)
```

---

## 🎯 Navigation Items

| Item | Path | Icon | Description |
|------|------|------|-------------|
| Home | `/` | Home | Homepage |
| Course Finder | `/ai-college-finder` | Search | AI-powered course finder |
| Events | `/events` | Calendar | Upcoming events & webinars |
| Contact | `/contact-us` | MessageCircle | Contact form |
| FAQs | `/faqs` | HelpCircle | Frequently asked questions |

---

## 🎨 States

### Active State
- **Color**: Primary-800 (dark blue)
- **Font**: Medium weight
- **Icon**: Thicker stroke (2.5)
- **Indicator**: Orange dot below icon
- **Top Bar**: Animated bar showing active position

### Inactive State
- **Color**: Gray-500
- **Hover**: Primary-600
- **Icon**: Normal stroke (2)

### Hidden State
- **Transform**: translateY(100%)
- **Trigger**: Scrolling down >100px
- **Restore**: Scrolling up

---

## 📱 Responsive Behavior

### Mobile (<768px)
- ✅ Visible and functional
- ✅ Fixed to bottom
- ✅ Auto-hide on scroll down
- ✅ Full width navigation

### Desktop (≥768px)
- ❌ Hidden completely
- ℹ️ Uses regular header navigation instead

---

## ♿ Accessibility

### Features
- **Semantic HTML**: `<nav>` element with proper ARIA labels
- **Keyboard Navigation**: Full keyboard support via native links
- **Screen Readers**: Descriptive labels and aria-current
- **Focus Indicators**: Visible focus states
- **Color Contrast**: WCAG AA compliant

### ARIA Attributes
```jsx
aria-label="Mobile bottom navigation"
aria-current={active ? "page" : undefined}
aria-hidden="true" // For decorative elements
```

---

## 🎭 Animations

### Show/Hide Animation
- **Property**: transform (translateY)
- **Duration**: 300ms
- **Easing**: ease-in-out
- **Trigger**: Scroll direction change

### Active Tab Bar
- **Property**: transform (translateX)
- **Duration**: 300ms
- **Easing**: ease-in-out
- **Trigger**: Route change

### Hover Effects
- **Property**: color
- **Duration**: 200ms
- **Easing**: ease-in-out

---

## 🧪 Testing

Test file: `src/components/ui/__tests__/BottomNavigation.test.jsx`

```bash
npm test BottomNavigation
```

### Test Coverage
- ✅ Renders all navigation items
- ✅ Highlights active page
- ✅ Correct href attributes
- ✅ ARIA attributes
- ✅ Responsive classes
- ✅ Icon rendering
- ✅ Route pattern matching

---

## 🎨 Customization

### Changing Navigation Items

Edit the `navItems` array in `BottomNavigation.jsx`:

```jsx
const navItems = [
  {
    name: "Item Name",
    href: "/path",
    icon: IconComponent,
  },
  // ... more items
];
```

### Styling

The component uses Tailwind classes. Key customization points:

```jsx
// Background color
className="bg-white" // Change to bg-gray-100, etc.

// Active color
className="text-primary-800" // Change to any color

// Height
className="h-16" // Change to h-14, h-20, etc.

// Border
className="border-t border-gray-200" // Customize border
```

---

## 🔄 State Management

### Scroll State
```jsx
const [isVisible, setIsVisible] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);
```

- **isVisible**: Controls show/hide animation
- **lastScrollY**: Tracks scroll direction

### Active State
```jsx
const pathname = usePathname();
const isActive = (href) => {
  if (href === "/") return pathname === href;
  return pathname.startsWith(href);
};
```

- Uses Next.js `usePathname` hook
- Exact match for home, prefix match for others

---

## 🐛 Known Considerations

### Scroll Behavior
- Hides when scrolling down >100px
- Shows immediately when scrolling up
- Smooth transitions prevent jarring UX

### Z-Index
- Set to `z-50` to stay above most content
- May need adjustment if you have modals (z-50+)

### Content Overlap
- Spacer div (h-20) prevents content from being hidden
- Only rendered on mobile (md:hidden)

---

## 📦 Dependencies

- **React**: ^19.0.0
- **Next.js**: ^15.3.3 (usePathname hook)
- **Lucide React**: Icons
- **Tailwind CSS**: Styling

---

## 🚀 Performance

- **Client Component**: Uses React hooks
- **Passive Scroll Listener**: Better scroll performance
- **Minimal Re-renders**: Only on route change or scroll direction change
- **No External Requests**: Fully client-side

---

## 📸 Visual Reference

```
┌─────────────────────────────────────────┐
│  ████▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀████  │ ← Active indicator bar
│                                         │
│   🏠      🔍      📅      💬      ❓   │ ← Icons
│   •                                    │ ← Active dot
│  Home  Course  Events Contact FAQs    │ ← Labels
│         Finder                         │
└─────────────────────────────────────────┘
```

---

## 💡 Tips

1. **Test on Mobile**: Best experienced on mobile devices or with responsive mode
2. **Scroll Testing**: Try scrolling up/down to see auto-hide
3. **Route Testing**: Navigate between pages to see active state
4. **Performance**: The scroll listener is passive for better performance

---

## 🔗 Related Components

- **Header**: Desktop navigation
- **FloatingCTA**: Floating consultation button
- **Footer**: Site footer with links

---

## 📝 Changelog

### v1.0.0 (October 14, 2025)
- ✅ Initial implementation
- ✅ 5 navigation items
- ✅ Auto-hide on scroll
- ✅ Active state indicators
- ✅ Full accessibility support
- ✅ Comprehensive tests

---

**Component Location**: `src/components/ui/BottomNavigation.jsx`  
**Test Location**: `src/components/ui/__tests__/BottomNavigation.test.jsx`  
**Last Updated**: October 14, 2025
