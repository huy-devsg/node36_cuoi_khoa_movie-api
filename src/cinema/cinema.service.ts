import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CinemaService {
  prisma = new PrismaClient();
  selectCinemaComplex = {
    ma_cum_rap: true,
    ten_cum_rap: true,
    dia_chi: true,
  };
  async getCinemaInfor(id: number) {
    try {
      if (id) {
        const data = await this.prisma.heThongRap.findUnique({
          where: {
            ma_he_thong_rap: id,
          },
        });
        return { data };
      } else {
        const data = await this.prisma.heThongRap.findMany({});
        return { data };
      }
    } catch {
      throw new Error("Can't find id!");
    }
  }
  async getCinemaComplexInfor(id: number) {
    try {
      const data = await this.prisma.cumRap.findFirst({
        where: {
          ma_he_thong_rap: id,
        },
        include: {
          RapPhim: {
            select: {
              ma_rap: true,
              ten_rap: true,
            },
          },
        },
      });
      return { data };
    } catch {
      throw new Error("Can't find id!");
    }
  }
  async getShowtimeCinemaComplexInfor(id: number) {
    try {
      if (id) {
        const data = await this.prisma.heThongRap.findUnique({
          where: {
            ma_he_thong_rap: id,
          },
          include: {
            CumRap: {
              select: {
                ma_cum_rap: true,
                ten_cum_rap: true,
                dia_chi: true,
                RapPhim: {
                  select: {
                    ma_rap: true,
                    ten_rap: true,
                    LichChieu: {
                      select: {
                        ma_lich_chieu: true,
                        ma_rap: true,
                        ngay_gio_chieu: true,
                        gia_ve: true,
                        Phim: {
                          select: {
                            ma_phim: true,
                            ten_phim: true,
                            hinh_anh: true,
                            hot: true,
                            dang_chieu: true,
                            sap_chieu: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
        return { data };
      } else {
        const data = await this.prisma.heThongRap.findMany({
          include: {
            CumRap: {
              select: {
                ma_cum_rap: true,
                ten_cum_rap: true,
                dia_chi: true,
                RapPhim: {
                  select: {
                    ma_rap: true,
                    ten_rap: true,
                    LichChieu: {
                      select: {
                        ma_lich_chieu: true,
                        ma_rap: true,
                        ngay_gio_chieu: true,
                        gia_ve: true,
                        Phim: {
                          select: {
                            ma_phim: true,
                            ten_phim: true,
                            hinh_anh: true,
                            hot: true,
                            dang_chieu: true,
                            sap_chieu: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });
        return { data };
      }
    } catch {
      throw new Error("Can't find id!");
    }
  }
  async getShowtimeInfor(id: number) {
    try {
      const data = await this.prisma.phim.findUnique({
        where: {
          ma_phim: id,
        },
        include: {
          LichChieu: {
            select: {
              ma_lich_chieu: true,
              ma_rap: true,
              ngay_gio_chieu: true,
              gia_ve: true,
              RapPhim: {
                select: {
                  ma_rap: true,
                  ten_rap: true,
                  CumRap: {
                    select: {
                      ma_cum_rap: true,
                      ten_cum_rap: true,
                      dia_chi: true,
                      HeThongRap: {
                        select: {
                          ma_he_thong_rap: true,
                          ten_he_thong_rap: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });
      return { data };
    } catch {
      throw new Error("Can't find id!");
    }
  }
}
