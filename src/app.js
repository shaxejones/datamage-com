import Alpine from 'alpinejs';
import { supabase } from './supabase';

// Make Alpine and Supabase available on the window
window.Alpine = Alpine;
window.supabase = supabase;

// Start Alpine
Alpine.start();
