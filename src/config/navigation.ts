import type { LucideIcon } from 'lucide-react'
import { Gift, BookOpen, Cherry, Swords, Hand, Calendar, Link2 } from 'lucide-react'

export interface NavigationItem {
	key: string // 用于翻译键，如 'codes' -> t('nav.codes')
	path: string // URL 路径，如 '/codes'
	icon: LucideIcon // Lucide 图标组件
	isContentType: boolean // 是否对应 content/ 目录
}

// 导航配置（7 分类：codes/guide/fruits/weapons/styles/release/links）
export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'codes', path: '/codes', icon: Gift, isContentType: true },
	{ key: 'guide', path: '/guide', icon: BookOpen, isContentType: true },
	{ key: 'fruits', path: '/fruits', icon: Cherry, isContentType: true },
	{ key: 'weapons', path: '/weapons', icon: Swords, isContentType: true },
	{ key: 'styles', path: '/styles', icon: Hand, isContentType: true },
	{ key: 'release', path: '/release', icon: Calendar, isContentType: true },
	{ key: 'links', path: '/links', icon: Link2, isContentType: true },
]

// 从配置派生内容类型列表（用于路由和内容加载）
export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1),
) // 移除开头的 '/' -> ['codes', 'guide', 'fruits', 'weapons', 'styles', 'release', 'links']

export type ContentType = (typeof CONTENT_TYPES)[number]

// 辅助函数：验证内容类型
export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
