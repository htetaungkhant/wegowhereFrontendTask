import { selectAppName } from '@/store';
import { useSelector } from 'react-redux';

export function useAppName() {
    return useSelector(selectAppName);
}