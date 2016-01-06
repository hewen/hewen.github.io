---
date: 2014-01-26 16:09:12+00:00
layout: post
title: 开始使用Gentoo
thread: 166
category: Gentoo
tags: Gentoo 系统 linux
---
前言
=============
用了很久的Debain好久没用过其他的系统了，Linux中几个比较特别的archlinux，Gentoo，LFS（主要是定制性强、高性能）也相对不是很好上手。不过archlinux,Gentoo和LFS安装系统时要借助已有的linux(可以一边听着歌一边安装着装系统)或者livecd。这几个系统之前都有用过一段时间，但是基本都是用上几天就不想用了，archlinux和Gentoo是不太适应包管理，LFS完全被虐光安装就要花个两天。Gentoo吸引我的还是高度自定和能得到很高的性能,是个一劳永逸的的活。不过换成Gentoo主要还是因为在知乎上看到有人评价Gentoo说是懒人专用版,冲着这句话果断换了。按我的了解说说Gentoo的特点（可能不太准确），首先Gentoo中所有软件都是通过编译安装（很多人说他不太环保、费电、二氧化碳排放会增多哈，不过不能最大化利用资源不也是浪费么），虽说Gentoo的包管理方式和FreeBSD很类似还是FreeBSD的编译安装更简单些配置编译选项都有个菜单移动键盘上下键选就行了，而且FreeBSD好歹还提供二进制的安装，Gentoo官方只有少部分有二进制的包。其次就是archlinux和Gentoo能滚动升级，这还是满吸引人的(虽说的Debian也可通过配置apt的源来实现滚动升级，但貌似不同版本可能有兼容性问题)。废话就说这么多，前几天就倒腾了转到Gentoo下用了一礼拜了吧，把基本的驱动和常用软件终于搞定了。下面说说我觉得其中比较比较重要的内容哈。
1.编译内核
=============
Gentoo现在安装官方推荐从stage3开始基本的工具都配置好了，不像LFS还要自己编译工具链还是要弄三回。对于我来说Gentoo安装最大困难就是编译内核，不过可以直接用通用的内核，但这样会把大量驱动打成模块，用来支持不同设备导致编译耗时太长。手动配置内核后编译可能会有问题，不过貌似3.x以后的内核貌似编译出问题比2.6.x少了很多，我是这样觉得的。现在内核都3.12了感觉时光飞逝，还要很多要学习。编译内核的配置选项我没没改多少，就是减少了些额外的驱动设备这主要对自己电脑显卡、网卡、声卡型号要有了解就很好选了还有就是文件系统的支持我就选了ext4其他能取消都取消了。其他配置都懒得配了。编译内核倒是没花太多时间，主要是之前弄过很多次了。对于初次编译我想就是大量配置选项不知道要选什么了，要通过kernel的手册对选项要有一些了解还是要花些时间。
2.驱动问题
=============
我的非主流的设备,我的无线网卡，这次手写板有了之前的折腾倒很简单就搞定了，这是比较烦人的问题。我的无线网卡是Broadcom的BCM4312，之前无线网卡安装按照[wireless.kernel.org](http://wireless.kernel.org/en/users/Drivers/b43/)的对b43网卡的安装步骤进行安装就搞定了。这次郁闷的的很，直接把Broadcom的驱动编译进内核死活无线网卡都没法用，打成模块就很顺利让waln0的网卡up了起来。编译内核还是技术活还是要好好研究。还有就是Gentoo的网络管理方式还真是有点不一样。对wlan0的start、stop，是要在/etc/init.d/net.lo文件建立个net.waln0的软链接来控制。还有就是通过wpa_supplicant来连接无线反应还真是有点慢，重启网卡后要过个几秒钟才连上还总是发出警告信息说是设备没激活。害我以为网卡驱动没弄好折腾好久。
3.make.conf
=============
这是一个对Gentoo格外重要的文件，这其中包含了编译的选项可以针对不同平台优化编译参数。FreeBSD也有这么个文件也是类似的效果。
4.emerge的包管理方式
=============
Gentoo中最不太适应的就是他的包管理，尤其是编译选项同过USE的变量来控制。之前就是搞不定USE选项弄得软件老是装不上，也不知道针对每个软件打什么标签弄得一头雾水。这次认真的看了下Gentoo的帮助文档和wiki总算有了点了解。原来有equery和eix的两个便利的工具可以很方便的查找用emerge安装的软件的各种信息，工具的详细使用方法可以参照Gentoo的wiki的[Gentoolkit部分](https://wiki.gentoo.org/wiki/Gentoolkit)。还有个网站专门来查Gentoo软件中的信息[Gentoobrowse.randomdan.homeip.net](http://Gentoobrowse.randomdan.homeip.net/)。这里说些废话，在编译软件中我觉得编译安装吃亏的就是firefox，编译时间太长初次安装比我安装系统时间还长长达2个多小时一堆依赖要装，而且貌似编译后的和官方的二进制版我基本没有感觉什么速度上的优势。还有就是编译桌面环境编译时间费的点时间，是要是安装gnome可先睡会了，桌面环境目前比较喜欢dwm，整个软件就几M大小，依赖少。

结束语
=============
安装Gentoo基本就是在了解Linux的过程，也是个不断折腾的过程。

附:安装记录
=============
首先安装gentoo你需要有一个linux环境,fdisk命令建立分区,mkfs.ext4格式化磁盘
{% highlight sh %}
$ sudo fdisk /dev/sda

Device     Boot    Start       End   Sectors  Size Id Type
/dev/sda1  *        2048  62916607  62914560   30G 83 Linux
/dev/sda2       62916608 250069679 187153072 89.2G 83 Linux

{% endhighlight %}

我设置的比较简单,/dev/sda1大小30G日常使用足够,挂载/目录,/dev/sda2挂载/home目录,启动分区没有单独设置,用了ssd硬盘没有分swap分区.如果使用lvm分区还要有其他设置,参考[gentoo的wiki文档](https://wiki.gentoo.org/wiki/LVM).

{% highlight sh %}
$ sudo mkfs.ext4 /dev/sda1
$ sudo mkfs.ext4 /dev/sda2
$ sudo mkdir /mnt/gentoo
$ sudo mount /dev/sda1 /mnt/gentoo; \
sudo mount /dev/sda2 /mnt/gentoo/home; \
sudo mount -t proc none /mnt/gentoo/proc; \
sudo mount --rbind /sys /mnt/gentoo/sys; \
sudo mount --rbind /dev /mnt/gentoo/dev

# 我基本在163下载stage3,portage最新的包,分别解压到 /mnt/gentoo/目录和/mnt/gentoo/usr
# http://mirrors.163.com/gentoo/releases/x86/autobuilds/current-stage3-i686/
# http://mirrors.163.com/gentoo/snapshots/

$ wget http://mirrors.163.com/gentoo/releases/x86/autobuilds/\
current-stage3-i686/stage3-i686-20151020.tar.bz2
$ wget http://mirrors.163.com/gentoo/snapshots/portage-latest.tar.bz2
$ sudo tar xvjf ~/stage3-i686-20151020.tar.bz2 -C /mnt/gentoo/
$ sudo tar xvjf ~/portage-latest.tar.bz2 -C /mnt/gentoo/usr
#复制本地域名解析文件
$ cp -L /etc/resolv.conf /mnt/gentoo/etc
#切到新系统
$ sudo chroot /mnt/gentoo /bin/bash
#修改make.conf

$ nano make.conf

-----------
CFLAGS="-O2 -march=i686 -pipe"
CXXFLAGS="${CFLAGS}"
CHOST="i686-pc-linux-gnu"
MAKEOPTS="-j3"
EMERGE_DEFAULT_OPTS="--autounmask=n"
ACCEPT_LICENSE="*"
RUBY_TARGETS="ruby19 ruby20"
PHP_TARGETS="php5-4 php5-5 php5-6"
PYTHON_TARGETS="python2_7 python3_3 python3_4"
PKG_CONFIG_PATH="/usr/lib/pkgconfig"
LINGUAS="zh zh_CN zh_CN.UTF-8 en"
VIDEO_CARDS="intel"
ALSA_CARDS="hda-intel"

GENTOO_MIRRORS="
http://mirrors.163.com/gentoo/ \
http://mirrors.sohu.com/gentoo/ \
http://mirrors.aliyun.com/gentoo/ \
http://gentoo.cites.uiuc.edu/pub/gentoo/ \
http://mirror.usu.edu/mirrors/gentoo/ \
http://gentoo.chem.wisc.edu/gentoo/ \
http://mirror.its.uidaho.edu/pub/gentoo/ \
http://ftp.ucsb.edu/pub/mirrors/linux/gentoo/ \
http://mirrors.tuna.tsinghua.edu.cn/gentoo/ \
http://mirrors.ustc.edu.cn/gentoo/ \
http://mirror.bjtu.edu.cn/gentoo/ \
"
-----------

#修改同步portage为国内地址
$ mkdir /etc/portage/repos.conf/
$ nano /etc/portage/repos.conf/gentoo.conf

-----------
[DEFAULT]
main-repo = gentoo

[gentoo]
location = /usr/portage
sync-type = rsync
sync-uri = rsync://mirrors.ustc.edu.cn/gentoo-portage
auto-sync = yes
-----------

#同步portage
$ emerge -av eix
$ eix-sync

#设置时区
$ cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
$ echo "Asia/Shanghai" > /etc/timezone
#设置本机，默认为1
$ eselect profile list
$ eselect profile set 1
#设置主机名
$ nano /etc/conf.d/hostname
#安装linux内核源码
$ emerge gentoo-sources
#内核自动配置与生成核心的工具
$ emerge genkernel
# 编译内核
$ cd /usr/src/linux
$ make menuconfig
$ make -j3
$ make modules -j3
$ make -j3 modules_install
$ make install
 
#设置分区表
$ nano /etc/fstab
#设置键盘
$ nano /etc/conf.d/keymaps
#设置root密码
$ passwd

#安装启动引导grub
$ emerge -av sys-boot/grub
$ grub-install --no-floppy /dev/sda
$ grub2-mkconfig -o /boot/grub/grub.cfg
 
#设置无线网卡
$ cd /etc/init.d
$ ln -s net.lo net.wlan0
$ rc-update add net.wlan0 default

$ nano /etc/wpa_supplicant/wpa_supplicant.conf
 -----------
 network={
 ssid="ssid名称"
 psk="密码"
 key_mgmt=WPA-PSK
 priority=5
}
 -----------

#配置语言环境
$ nano /etc/locale.gen
 -----------
 en_US.UTF-8 UTF-8
 zh_CN.UTF-8 UTF-8
 -----------
$ locale-gen

$ useradd -m -G users,wheel,lp,audio,video,usb -s /bin/bash 新用户

#到这里基本就可以重启进入新系统了,再安装常用软加和桌面环境

#安装常用软件
$ emerge -av
#常用系统工具
 app-shells/gentoo-zsh-completions app-shells/zsh sudo \
 app-portage/gentoolkit sys-apps/mlocate lftp \
 app-text/tree app-arch/rar dev-vcs/tig dev-vcs/git \ 
#无线网卡, 我的无线网卡: Broadcom Corporation BCM4312
 wpa_supplicant sys-kernel/linux-firmware sys-firmware/b43-firmware \
#声卡(Audio device: Intel Corporation 82801I (ICH9 Family) HD Audio Controller)
 media-sound/alsa-utils \
#桌面环境
 x11-base/xorg-server x11-base/xorg-drivers \
 xfce-base/xfce4-meta xfce-base/xfce4-session \
#字体
 media-fonts/wqy-zenhei media-fonts/wqy-microhei \
 media-fonts/wqy-unibit media-fonts/wqy-bitmapfont \
#输入法
 app-i18n/fcitx app-i18n/fcitx-cloudpinyin app-i18n/fcitx-configtool \
#屏保
 x11-misc/xscreensaver \
#pdf阅读器
 kde-apps/okular \
#终端
 x11-terms/guake
#开发工具vim/emacs
 app-editors/vim app-editors/emacs \
#浏览器
 www-client/firefox-bin \
#画图
 media-gfx/gimp \
#视频播放
 media-video/vlc

{% endhighlight %}
